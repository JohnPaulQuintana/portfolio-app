import ContactCTA from "./components/ContactCTA";
import Header from "./components/Header";
import Hero from "./components/Hero";
import HowIWork from "./components/HowIWork";
import SelectedProjects from "./components/SelectedProjects";
import TechStack from "./components/TechStack";
// import UseCases from "./components/UseCase";
import WhatIBuild from "./components/WhatIBuild";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="bg-white text-black overflow-x-hidden">
      <Header />

      <main className="relative">
        {/* HERO */}
        <section className="min-h-screen flex items-center justify-center px-0 md:px-6 mt-20">
          <Hero />
        </section>

        <section id="solutions" className="px-0 md:px-6">
          <WhatIBuild />
        </section>

        <section className="px-0 md:px-6">
          <HowIWork />
        </section>

        <section id="work" className="px-0 md:px-6">
          <SelectedProjects />
        </section>

        <section id="stack" className="px-0 md:px-6">
          <TechStack />
        </section>

        <section id="contact" className="px-0 md:px-6">
          <ContactCTA />
        </section>

        {/* CTA */}
        <Footer />
      </main>
    </div>
  );
}
