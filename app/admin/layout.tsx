import "../globals.css";

// Layout raíz del segmento /admin (fuera del árbol [locale]).
// Protegido por Basic Auth en middleware.ts; siempre en español.
export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="antialiased bg-slate-950 text-slate-50 min-h-screen font-sans">
        {children}
      </body>
    </html>
  );
}
