import { panelConfig } from "@lib/config/panel";

const metrics = [
  {
    label: "Clientes activos",
    value: "0",
    description: "Empresas o personas en operación.",
  },
  {
    label: "Proyectos abiertos",
    value: "0",
    description: "Trabajos en ejecución.",
  },
  {
    label: "Por cobrar",
    value: "Gs. 0",
    description: "Facturas, señas o pagos pendientes.",
  },
  {
    label: "Ingreso del mes",
    value: "Gs. 0",
    description: "Total registrado este mes.",
  },
];

export default function DashboardPage() {
  return (
    <section className="space-y-8">
      <div>
        <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
          Dashboard
        </p>

        <h1 className="mt-2 text-4xl font-bold tracking-tight">
          Centro de control
        </h1>

        <p className="mt-3 max-w-3xl text-zinc-400">
          Panel adaptable para controlar clientes, ventas, proyectos, cobros,
          tareas y reportes. Este mismo motor después puede instalarse como
          Central Bianca, Central Oriplast o Central La Roca.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {metrics.map((metric) => (
          <div
            key={metric.label}
            className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-5 shadow-sm"
          >
            <p className="text-sm text-zinc-400">{metric.label}</p>
            <p className="mt-3 text-3xl font-bold">{metric.value}</p>
            <p className="mt-2 text-sm text-zinc-500">
              {metric.description}
            </p>
          </div>
        ))}
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6">
          <h2 className="text-xl font-semibold">Negocios configurados</h2>

          <div className="mt-4 space-y-3">
            {panelConfig.businesses.map((business) => (
              <div
                key={business.id}
                className="rounded-xl border border-zinc-800 bg-zinc-950 p-4"
              >
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <h3 className="font-semibold">{business.name}</h3>
                    <p className="mt-1 text-sm text-zinc-400">
                      {business.description}
                    </p>
                  </div>

                  <span className="rounded-full border border-zinc-700 px-3 py-1 text-xs text-zinc-400">
                    {business.type}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6">
          <h2 className="text-xl font-semibold">Próxima evolución</h2>

          <div className="mt-4 space-y-3 text-sm text-zinc-400">
            <p>1. Conectar Supabase para guardar clientes y proyectos.</p>
            <p>2. Crear formularios reales para pipeline y pedidos.</p>
            <p>3. Agregar autenticación privada.</p>
            <p>4. Convertir este panel en plantilla instalable.</p>
            <p>5. Clonarlo como Central Bianca.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
