import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Orchestra from "@/components/Orchestra";
import Publications from "@/components/Publications";
import Projects from "@/components/Projects";
import Ideas from "@/components/Ideas";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <About />
        <Orchestra />
        <Publications />
        <Projects />
        <Ideas />
      </main>
      <Footer />
    </>
  );
}
