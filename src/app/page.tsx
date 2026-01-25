import Header from "@/components/sections/header";
import Hero from "@/components/sections/hero";
import Benefits from "@/components/sections/benefits";
import Services from "@/components/sections/services";
import Viscosuplementacion from "@/components/sections/viscosuplementacion";
import Experience from "@/components/sections/experience";
import FAQ from "@/components/sections/faq";
import CtaFinal from "@/components/sections/cta-final";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8F9FA]">
      <Header />
      <Hero />
      <Benefits />
      <Services />
      <Viscosuplementacion />
      <Experience />
      <FAQ />
      <CtaFinal />
      <Footer />
    </main>
  );
}
