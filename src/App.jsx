import "./app.scss";
import Navbar from "./components/navbar/Navbar.jsx";
import Hero from "./components/hero/Hero.jsx";
import Parallax from "./components/parallax/Parallax.jsx";
import Technologies from "./components/technologies/Technologies.jsx";
import Portfolio from "./components/portfolio/Portfolio.jsx";
import Contact from "./components/contact/Contact.jsx";
import Cursor from "./components/cursor/Cursor.jsx";
export default function App(){
  return <div>
    <Cursor />
    <section id="Homepage">
      <Navbar />
      <Hero />
    </section>
    <section id="Parallax"><Parallax/></section>
    <section id="Technologies"><Technologies /></section>
    <Portfolio />
    <section id="Contact"><Contact /></section>
  </div>
}
