import {BrowserRouter, Routes, Route} from "react-router-dom";

import Header from "./components/Header";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Events from "./pages/Events";
import Contact from "./pages/Contact";
import Sponsors from "./pages/Sponsors";
import Footer from "./components/Footer";

import "./Styles/Header.css";
import "./Styles/Homepage.css";
import "./Styles/About.css";
import "./Styles/Events.css";
import "./Styles/Sponsors.css";
import "./Styles/Contact.css";
import "./Styles/Footer.css";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/About" element={<About />} />
        <Route path="/Events" element={<Events />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Sponsors" element={<Sponsors />} />
      </Routes>

      <Footer />
    </BrowserRouter>  

  );
}

export default App;
