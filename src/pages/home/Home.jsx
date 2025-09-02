import BodyBackground from "../../components/bodyBackground/BodyBackground";
import Navbar from "../../components/navbar/Navbar";
import Hero from "../../components/hero/Hero";
import Services from "../../components/services/Services";
import Contact from "../../components/contact/Contact";
import Footer from "../../components/footer/Footer";

function Home() {
  return (
    <>
      <div>
        <BodyBackground />
        <Navbar />
        <Hero />
        <Services/>
        <Contact/>
        <Footer/>
      </div>
    </>
  );
}

export default Home;
