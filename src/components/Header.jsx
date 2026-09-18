import {useState, useEffect} from "react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  
  useEffect(() => {
    function sideMenu(clicked) {
      if (!clicked.target.closest(".menu-button") && !clicked.target.closest(".side-menu")) {
        setMenuOpen(false);
      }
    }

    document.addEventListener("click", sideMenu);

    return () => {
      document.removeEventListener("click", sideMenu);
    }
    })

  return (
    <header className="header">
      <div className="left-section">
        <a href="/">
          <img 
            className="logo" src="/pictures/Logo Version 2 (3).jpg"
          />
        </a>
      </div>

      <nav className="header-menu">
        <a href="about.html">
          About Us
        </a>
        <a href="events.html">
          Events
        </a>
        <a href="sponsers.html">
          Sponsers
        </a>
        <a href="contact.html">
          Contact
        </a>
      </nav>

      <button 
        className="menu-button"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <img 
          className="menu-icon"
          src="/pictures/hamburger-menu.svg"
        />
      </button>

      <div className={`side-menu ${menuOpen ? "open" : ""}`}>
        <a href="about.html">
          About Us
        </a>

        <a href="events.html">
          Events
        </a>

        <a href="sponsers.html">
          Sponsers
        </a>
        
        <a href="contact.html">
          Contact
        </a>
      </div>

      

      
    </header>
  );
}

export default Header;