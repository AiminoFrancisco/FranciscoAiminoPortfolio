import React, { useState, useEffect } from "react";
import styles from "../Header/header.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import RotatingCircles from "../RotatingCircles/RotatingCircles";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > window.innerHeight * 0.5) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  const handleResize = () => {
    if (window.innerWidth > 768) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
       
      <div className={styles.headerContent}>
      
        <div
          style={{
            position: "absolute",
            left: "1em",
            display: "flex",
            alignItems: "center",
            marginLeft: '20px'
          }}
        >
          
          <span
            style={{
              color: "#66D9ED",
              fontSize: "26px",
              fontWeight: "bold",
              textAlign: "left",
              marginTop:'1px'
            }}
            className={styles.Aimino}
          >
            AiminoFranciso._
          </span>
          
        </div>
       
        <nav>
          <ul
            className={`${styles.navList} ${hoveredIndex !== null ? styles.hovered : ""} ${menuOpen ? styles.menuOpen : ""}`}
          >
            {[
              "// home",
              "// expertice",
              "// experience",
              "// challenges",
              "// contact",
            ].map((section, index) => (
              <li
                key={section}
                onClick={() => scrollToSection(section)}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={hoveredIndex === index ? styles.hoveredItem : ""}
              >
                {section}
              </li>
            ))}
          </ul>
         
     
        </nav>
        <button
          className={styles.menuButton}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>
    
    </header>
    
  );
};

export default Header;
