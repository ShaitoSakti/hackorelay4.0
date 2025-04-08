"use client";
import Navbar from "@/app/Components/Navbar";
import Hero from "@/app/Components/Hero";
import About from "@/app/Components/About";
<<<<<<< HEAD
import Gallery from "./Components/Gallery";
import InnerveGuide from "./Components/ui/InnerveGuide"
import Theme from "./Components/Theme"
import FAQ from "./Components/FAQ";
import Prizes from "./Components/Prizes";
=======
import Schedule from "@/app/Components/schedule";
import Theme from "@/app/Components/theme";
import Prizes from "@/app/Components/prizes";
import Gallery from "@/app/Components/Gallery";
import FAQ from "@/app/Components/faq";
import Contact from "@/app/Components/contact";
import Footer from "@/app/Components/footer";
>>>>>>> f45a45ee80060b1c77db07b6a87a4c0ea5ec0ea9

export default function Home() {
  return (
    <div className="relative max-h-screen bg-neutral-900">
      <Navbar />
<<<<<<< HEAD
      <Hero />
      <About />
      <InnerveGuide/>
      <Theme/>
      <Prizes/>
      <FAQ/>
=======
      <div id="hero">
        <Hero />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="schedule">
        <Schedule />
      </div>
      <div id="themes">
        <Theme />
      </div>
      <div id="prizes">
        <Prizes />
      </div>
>>>>>>> f45a45ee80060b1c77db07b6a87a4c0ea5ec0ea9
      <Gallery />
      <div id="faqs">
        <FAQ />
      </div>
      <Contact />
      <Footer />
    </div>
  );
};