import Navbar from "@/components/Navbar";
// Si tenés el BottomNavbar también, descomentá la línea de abajo:
// import BottomNavbar from "@/components/BottomNavbar";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Acá enchufamos tu Navbar High-Ticket para toda la zona pública */}
      <Navbar />
      
      {/* Acá se carga la página de Precios, la Home, etc. */}
      <main className="flex-1">
        {children}
      </main>

      {/* Si usás el BottomNavbar en mobile, descomentá la línea de abajo: */}
      {/* <BottomNavbar /> */}
    </div>
  );
}
