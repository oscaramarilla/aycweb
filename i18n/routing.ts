import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["es", "en", "pt", "de"],
  defaultLocale: "es",
  // El español (mercado original) queda sin prefijo para preservar las URLs ya indexadas.
  localePrefix: "as-needed",
});

export type Locale = (typeof routing.locales)[number];
