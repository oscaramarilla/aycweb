import { createNavigation } from "next-intl/navigation";
import { routing } from "./routing";

// Reemplazos locale-aware de next/link y next/navigation.
// Usar estos en toda página bajo app/[locale] para no perder el idioma al navegar.
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
