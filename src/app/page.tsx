import Hero from "@/components/Hero";
import FeaturedWork from "@/components/home/FeaturedWork";
import StudioIntro from "@/components/home/StudioIntro";
import Services from "@/components/home/Services";
import ClientsStrip from "@/components/home/ClientsStrip";
import Testimonials from "@/components/home/Testimonials";
import ContactCTA from "@/components/home/ContactCTA";

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <FeaturedWork />
      <StudioIntro />
      <Services />
      <ClientsStrip />
      <Testimonials />
      <ContactCTA />
    </main>
  );
}
