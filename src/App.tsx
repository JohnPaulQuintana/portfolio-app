import ContactCTA from "./components/ContactCTA";
import Header from "./components/Header";
import Hero from "./components/Hero";
import HowIWork from "./components/HowIWork";
import SelectedProjects from "./components/SelectedProjects";
import TechStack from "./components/TechStack";
import UseCases from "./components/UseCase";
import WhatIBuild from "./components/WhatIBuild";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="bg-white text-black overflow-x-hidden">

      <Header />

      <main className="relative">

        {/* HERO */}
        <section className="min-h-screen flex items-center justify-center px-6 mt-20">
          <Hero />
        </section>

        {/* CAPABILITIES */}
        <section className="px-0 md:px-6">
          <WhatIBuild />
        </section>

        {/* HOW I WORK */}
        <section className="px-0 md:px-6">
            <HowIWork />
            <UseCases />
            <TechStack />
            <SelectedProjects />
            <ContactCTA />
        </section>

        {/* PROOF */}
        {/* <FeaturedWork /> */}

        {/* CTA */}
       <Footer />

      </main>
    </div>
  );
}