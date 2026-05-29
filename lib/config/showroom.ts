export interface ShowroomVideo {
  id: string; // YouTube video ID
  title: string;
  tag: string;
  metric?: string; // texto rastreable: resultado concreto del sistema
  description?: string; // solo para el video destacado
}

export interface ShowroomConfig {
  main: ShowroomVideo;
  secondary: ShowroomVideo[];
}

export const SHOWROOM: ShowroomConfig = {
  main: {
    id: "bltpfwxpwoQ",
    title: "El Ecosistema Operativo B2B en Acción",
    tag: "Ecosistema completo",
    description:
      "Trazabilidad total: desde la captación del lead hasta la firma del documento, 100% automatizado.",
    metric: "Lead → documento firmado sin intervención manual",
  },
  secondary: [
    {
      id: "vOCqg_zctec",
      title: "Motor Cotizador B2B",
      tag: "Logística & B2B",
      metric: "Cotización de lote en segundos",
    },
    {
      id: "nuOeyANqlH8",
      title: "Contratos B2C",
      tag: "Legal & Automático",
      metric: "Contrato generado al instante",
    },
    {
      id: "JBvZd0uXbzQ",
      title: "Cálculo de Plásticos",
      tag: "Manufactura",
      metric: "Materia prima calculada sin Excel",
    },
    {
      id: "hcZL2UUKGsU",
      title: "Sistemas Desplegados",
      tag: "Portafolio Real",
      metric: "Sistemas operando en producción",
    },
  ],
};
