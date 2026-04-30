import Header from "@/components/site/Header";
import Hero from "@/components/site/Hero";
import Services from "@/components/site/Services";
import About from "@/components/site/About";
import Projects from "@/components/site/Projects";
import FAQ from "@/components/site/FAQ";
import Contact from "@/components/site/Contact";
import Footer from "@/components/site/Footer";

const Index = () => (
  <>
    <a href="#main" className="skip-link">Hoppa till innehåll</a>
    <Header />
    <main id="main">
      <Hero />
      <Services />
      <About />
      <Projects />
      <FAQ />
      <Contact />
    </main>
    <Footer />
  </>
);

export default Index;
