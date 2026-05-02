import Link from "next/link";
import { panelConfig } from "@lib/config/panel";

export default function PanelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50">
      <aside className="fixed inset-y-0 left-0 hidden w-72 border-r border-zinc-800 bg-zinc-950 p-6 lg:block">
        <div className="mb-8">
          <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">
            Panel
          </p>

          <h1 className="mt-2 text-2xl font-bold">{panelConfig.appName}</h1>

          <p className="mt-2 text-sm text-zinc-400">
            {panelConfig.ownerName}
          </p>
        </div>

        <nav className="space-y-1">
          {panelConfig.modules.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block rounded-xl px-4 py-3 text-sm text-zinc-300 transition hover:bg-zinc-900 hover:text-white"
            >
              {item.title}
            </Link>
          ))}
        </nav>
      </aside>

      <main className="lg:pl-72">
        <header className="sticky top-0 z-10 border-b border-zinc-800 bg-zinc-950/80 px-6 py-4 backdrop-blur">
          <p className="text-sm text-zinc-400">Sistema operativo interno</p>
          <h2 className="font-semibold">{panelConfig.description}</h2>
        </header>

        <div className="p-6">{children}</div>
      </main>
    </div>
  );
}
