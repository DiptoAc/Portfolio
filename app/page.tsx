import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import GitHubHeatmap from "./components/GitHubHeatmap";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Certifications from "./components/Certifications";
import Test from "./components/Test";
import TestHero from "./components/TestHero";

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
