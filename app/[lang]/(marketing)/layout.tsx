import Navbar from "@/components/Navbar";
import FloatingResourcesCTA from "@/components/ui/FloatingResourcesCTA";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        {children}
      </main>
      <FloatingResourcesCTA />
    </div>
  );
}
