import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Projects from "./components/Projects";
import NewsSection from "./components/NewsSection";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  // Example project data (props drilling)
  const projectData = [
    { name: "Skyline Towers", location: "Pune" },
    { name: "Green Valley", location: "Mumbai" }
  ];

  return (
    <>
      <Header />
      <Hero />
      <Services />
      <Projects projects={projectData} />
      <NewsSection />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
