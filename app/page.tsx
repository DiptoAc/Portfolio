import Header from "../components/sections/Header";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Skills from "../components/sections/Skills";
import GitHubHeatmap from "../components/sections/GitHubHeatmap";
import Projects from "../components/sections/Projects";
import Experience from "../components/sections/Experience";
import Contact from "../components/sections/Contact";
import Footer from "../components/sections/Footer";
import Certifications from "../components/sections/Certifications";
import Test from "../components/sections/Test";
import TestHero from "../components/sections/TestHero";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      {/* <Test /> */}
      {/* <TestHero /> */}
      <Hero />
      <About />
      <Skills />
      <GitHubHeatmap />
      <Projects />
      <Experience />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  );
}
