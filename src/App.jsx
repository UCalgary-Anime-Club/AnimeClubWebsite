import {BrowserRouter, Routes, Route} from "react-router-dom";

import Header from "./components/Header";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Events from "./pages/Events";
import Contact from "./pages/Contact";
import Sponsers from "./pages/Sponsers";
import "./App.css";
import "./Homepage.css";
import "./About.css";
import "./Events.css";
import "./Sponsers.css";
import "./Contact.css";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/About" element={<About />} />
        <Route path="/Events" element={<Events />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Sponsers" element={<Sponsers />} />
      </Routes>
    </BrowserRouter>  
  );
}

export default App;
