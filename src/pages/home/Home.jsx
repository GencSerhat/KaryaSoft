import BodyBackground from "../../components/bodyBackground/BodyBackground";
import Navbar from "../../components/navbar/Navbar";
import Hero from "../../components/hero/Hero";
import Products from "../../components/products/Products";
import Contact from "../../components/contact/Contact";
import Footer from "../../components/footer/Footer";

function Home() {
  return (
    <>
      <div>
        <BodyBackground />
        <Navbar />
        <Hero />
        <Products/>
        <Contact/>
        <Footer/>
      </div>
    </>
  );
}

export default Home;
