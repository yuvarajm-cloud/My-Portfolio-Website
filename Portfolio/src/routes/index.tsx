import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { InteractiveBackground } from "@/components/InteractiveBackground";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen">
      <a href="#main" className="skip-link">Skip to content</a>
      <InteractiveBackground />
      <div className="relative z-10">
        <Navbar />
        <main id="main" tabIndex={-1}>
          <Hero />
          <Skills />
          <About />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
