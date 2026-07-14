import { ClientWrapper } from "@/app/components/ClientWrapper";
import { Navbar } from "@/app/sections/Navbar";
import { Hero } from "@/app/sections/Hero";
import { TrustedStats } from "@/app/sections/TrustedStats";
import { DestinationCategories } from "@/app/sections/DestinationCategories";
import { MembershipBenefits } from "@/app/sections/MembershipBenefits";
import { HolidayPackages } from "@/app/sections/HolidayPackages";
import { WhyChooseUs } from "@/app/sections/WhyChooseUs";
import { InteractiveWorldMap } from "@/app/sections/InteractiveWorldMap";
import { Testimonials } from "@/app/sections/Testimonials";
import { InstagramGallery } from "@/app/sections/InstagramGallery";
import { Partners } from "@/app/sections/Partners";
import { FAQ } from "@/app/sections/FAQ";
import { Footer } from "@/app/sections/Footer";

export default function Home() {
  return (
    <ClientWrapper>
      <a
        href="#destinations"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-[100] bg-white text-neutral-950 px-4 py-2 rounded-lg text-sm font-medium"
      >
        Skip to main content
      </a>
      <Navbar />
      <main>
        <Hero />
        <TrustedStats />
        <DestinationCategories />
        <MembershipBenefits />
        <HolidayPackages />
        <WhyChooseUs />
        <InteractiveWorldMap />
        <Testimonials />
        <InstagramGallery />
        <Partners />
        <FAQ />
      </main>
      <Footer />
    </ClientWrapper>
  );
}
