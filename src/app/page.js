import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import MainSection from "./components/MainSection";

export default function Home() {
  return (
    <div>
      <Header />

      <div id="Hero">
        <Hero />
      </div>

      <div id="MainSection">
        <MainSection />
      </div>

      <Footer />
    </div>
  );
}
