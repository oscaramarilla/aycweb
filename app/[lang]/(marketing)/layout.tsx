import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingResourcesCTA from "@/components/ui/FloatingResourcesCTA";
import { getDictionary } from "@/lib/i18n";

export default async function MarketingLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar t={dict} />
      <main className="flex-1">
        {children}
      </main>
      <Footer t={dict} lang={lang} />
      <FloatingResourcesCTA />
    </div>
  );
}
