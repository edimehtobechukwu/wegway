import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { Intro } from "../components/Intro";
import { Activities } from "../components/Activities";
import { Parties } from "../components/Parties";
import { Gallery } from "../components/Gallery";
import { Faq } from "../components/Faq";
import { Testimonials } from "../components/Testimonials";
import { Footer } from "../components/Footer";

export function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <div id="park">
        <Intro />
      </div>
      <div id="activities">
        <Activities />
      </div>
      <div id="parties">
        <Parties />
      </div>
      <Gallery />
      <Faq />
      <Testimonials />
      <div id="contact">
        <Footer />
      </div>
    </>
  );
}
