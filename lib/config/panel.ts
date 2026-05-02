export const panelConfig = {
  appName: "AYCweb Control",
  ownerName: "Oscar Amarilla",
  description:
    "Panel maestro para controlar clientes, proyectos, ventas, finanzas y operaciones.",

  mode: "agency",

  businesses: [
    {
      id: "aycweb",
      name: "AYCweb",
      type: "agency",
      description: "Infraestructura digital, automatización y sistemas B2B.",
    },
    {
      id: "ayc",
      name: "A Y C S.R.L.",
      type: "operations",
      description: "Operaciones, provisiones, contratos y proyectos B2G.",
    },
  ],

  modules: [
    { title: "Dashboard", href: "/dashboard", description: "Vista general." },
    { title: "Clientes", href: "/clientes", description: "CRM." },
    { title: "Pipeline", href: "/pipeline", description: "Ventas." },
    { title: "Proyectos", href: "/proyectos", description: "Implementaciones." },
    { title: "Finanzas", href: "/finanzas", description: "Cobros y márgenes." },
    { title: "Calendario", href: "/calendario", description: "Agenda." },
    { title: "Tareas", href: "/tareas", description: "Pendientes." },
    { title: "Reportes", href: "/reportes", description: "Métricas." },
    { title: "Configuración", href: "/configuracion", description: "Sistema." },
  ],
};