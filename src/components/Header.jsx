import {useState, useEffect} from "react";
import {Link} from "react-router-dom";

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
        <Link to="/">
          <img 
            className="logo" src="/pictures/Logo Version 2 (3).jpg"
          />
        </Link>
      </div>

      <nav className="header-menu">
        <Link to="/">
          Home
        </Link>
        <Link to="/About">
          About Us
        </Link>
        <Link to="/Events">
          Events
        </Link>
        <Link to="/Sponsors">
          Sponsors
        </Link>
        <Link to="/Contact">
          Contact
        </Link>
      </nav>

      <button 
        className="menu-button"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <img 
          className="menu-icon"
          src="./pictures/hamburger-menu.svg"
        />
      </button>

      <div className={`side-menu ${menuOpen ? "open" : ""}`}>
        <Link to="/About">
          About Us
        </Link>
        <Link to="/Events">
          Events
        </Link>
        <Link to="/Sponsors">
          Sponsors
        </Link>
        <Link to="/Contact">
          Contact
        </Link>
      </div>
      
    </header>
  );
}

export default Header;