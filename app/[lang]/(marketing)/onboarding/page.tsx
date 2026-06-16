import { getDictionary } from "@/lib/i18n";
import OnboardingClient from "@/components/onboarding/OnboardingClient";

export default async function OnboardingPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  return <OnboardingClient dict={dict} lang={lang} />;
}
