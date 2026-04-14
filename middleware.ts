import { NextRequest, NextResponse } from "next/server";

const ADMIN_USER = process.env.ADMIN_USER || "admin";
const ADMIN_PASS = process.env.ADMIN_PASS || "admin";
const isProduction = process.env.NODE_ENV === "production";

function unauthorizedResponse() {
  return new NextResponse(
    JSON.stringify({ error: "Unauthorized: credenciales inválidas o no proporcionadas." }),
    {
      status: 401,
      headers: {
        "WWW-Authenticate": "Basic realm=\"AYCweb Admin\"",
        "Content-Type": "application/json",
      },
    }
  );
}

function serverErrorResponse(message: string) {
  return new NextResponse(JSON.stringify({ error: message }), {
    status: 500,
    headers: {
      "Content-Type": "application/json",
    },
  });
}

function checkCredentials(authorization: string | null) {
  if (!authorization || !authorization.startsWith("Basic ")) {
    return false;
  }

  const encoded = authorization.split(" ")[1] || "";
  let decoded = "";

  try {
    decoded = Buffer.from(encoded, "base64").toString("utf-8");
  } catch {
    return false;
  }

  const [user, pass] = decoded.split(":");
  return user === ADMIN_USER && pass === ADMIN_PASS;
}

export function middleware(req: NextRequest) {
  if (isProduction && (!process.env.ADMIN_USER || !process.env.ADMIN_PASS)) {
    return serverErrorResponse(
      "Protección administrativa no configurada. Establece ADMIN_USER y ADMIN_PASS." 
    );
  }

  const auth = req.headers.get("authorization");
  if (!checkCredentials(auth)) {
    return unauthorizedResponse();
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
