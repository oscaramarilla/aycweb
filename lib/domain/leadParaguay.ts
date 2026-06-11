import { z } from "zod";

export const leadParaguaySchema = z.object({
  nombre:    z.string().min(2).max(80),
  empresa:   z.string().max(120).optional().or(z.literal("")),
  email:     z.string().email(),
  whatsapp:  z.string().min(6).max(20),
  pais:      z.string().min(2).max(60),
  sector:    z.enum(["energia", "agroindustria", "tecnologia",
                     "logistica", "real_estate", "otro"]),
  objetivo:  z.enum(["invertir", "instalar_operacion", "socio_local",
                     "exportar_importar", "explorar"]),
  capital:   z.enum(["menos_50k", "50k_250k", "250k_1m",
                     "mas_1m", "prefiere_no_decir"]),
  horizonte: z.enum(["0_6m", "6_18m", "mas_18m"]),
  mensaje:   z.string().max(600).optional(),
});

export type LeadParaguay = z.infer<typeof leadParaguaySchema>;

export const SECTOR_LABELS: Record<LeadParaguay["sector"], string> = {
  energia:          "Energía e industrialización",
  agroindustria:    "Agroindustria",
  tecnologia:       "Tecnología e infraestructura digital",
  logistica:        "Logística y corredor bioceánico",
  real_estate:      "Real Estate productivo",
  otro:             "Otro / Explorar",
};

export const CAPITAL_LABELS: Record<LeadParaguay["capital"], string> = {
  menos_50k:         "Menos de US$ 50.000",
  "50k_250k":        "US$ 50.000 – 250.000",
  "250k_1m":         "US$ 250.000 – 1.000.000",
  mas_1m:            "Más de US$ 1.000.000",
  prefiere_no_decir: "Prefiero no decirlo",
};
