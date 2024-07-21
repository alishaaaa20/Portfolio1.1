import Contact from "@/components/HomePage/Contact";
import Feature from "@/components/HomePage/Feature";
import Footer from "@/components/HomePage/Footer";
import Hero from "@/components/HomePage/Hero";
import Projects from "@/components/HomePage/Projects";

export default function Home() {
  return (
    <main>
      <Hero />
      <Feature />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
