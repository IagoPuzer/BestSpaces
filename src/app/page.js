import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Form from "./components/Form";

export default function Home() {
  return (
    <div>
      <Header />

      <div id="Hero">
        <Hero />
      </div>

      <div id="Form">
        <Form />
      </div>

      <Footer />
    </div>
  );
}
