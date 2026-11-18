import { useState } from "react";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Services from "./components/Services.jsx";
import Looks from "./components/Looks.jsx";
import Academy from "./components/Academy.jsx";
import Reviews from "./components/Reviews.jsx";
import Booking from "./components/Booking.jsx";
import Visit from "./components/Visit.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  // lets "Book" on any service pre-select it in the booking form
  const [preset, setPreset] = useState("");

  const bookService = (name) => {
    setPreset(name);
    document.getElementById("book")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services onBook={bookService} />
        <Looks />
        <Academy />
        <Reviews />
        <Booking preset={preset} />
        <Visit />
      </main>
      <Footer />
    </>
  );
}
