"use client"; // Asegúrate de marcar este archivo como cliente

import React, { useState, useRef, useEffect } from "react";
import styles from "./page.module.css";
import Header from "./Component/Header/Header";
import Section from "./Component/Section/Section";
import AnimatedArrow from "./Component/Icons/iconsflecha";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobileScreenButton } from "@fortawesome/free-solid-svg-icons";
import { faNode } from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";
import RotatingCircles from "./Component/RotatingCircles/RotatingCircles";
import ExpandableCard from "./Component/ExpandableCard/ExpandableCard";
import Accordion from "./Component/ExpandableCard/ExpandableCard";
import AccordionProfessionalExpertise from "./Component/ExpandableCard/ExpandableCard";
import AccordionChallenge from "./Component/AcordionChalleng/AcordionChallenge";
import Contact from "./Component/Contact/Contact";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  useEffect(() => {
    const syncPointer = ({ x, y }) => {
      document.documentElement.style.setProperty("--x", x.toFixed(2));
      document.documentElement.style.setProperty(
        "--xp",
        (x / window.innerWidth).toFixed(2)
      );
      document.documentElement.style.setProperty("--y", y.toFixed(2));
      document.documentElement.style.setProperty(
        "--yp",
        (y / window.innerHeight).toFixed(2)
      );
    };

    const handleDOMContentLoaded = () => {
      const glowingCard = document.querySelector(".glowing-card");
      if (glowingCard) {
        glowingCard.addEventListener("mouseenter", () => {
          glowingCard.classList.add("hover");
        });

        glowingCard.addEventListener("mouseleave", () => {
          glowingCard.classList.remove("hover");
        });
      }
    };

    document.body.addEventListener("pointermove", syncPointer);
    document.addEventListener("DOMContentLoaded", handleDOMContentLoaded);

    return () => {
      document.body.removeEventListener("pointermove", syncPointer);
      document.removeEventListener("DOMContentLoaded", handleDOMContentLoaded);
    };
  }, []);
  const sectionRefs = {
    home: useRef(null),
    expertice: useRef(null),
    experience: useRef(null),
    challenges: useRef(null),
    contact: useRef(null),
  };
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false); // Opcional, si quieres ocultar la animación cuando no esté en vista
        }
      },
      { threshold: 0.1 } // Ajusta el umbral según sea necesario
    );

    if (sectionRefs.expertice.current) {
      observer.observe(sectionRefs.expertice.current);
    }

    return () => {
      if (sectionRefs.expertice.current) {
        observer.unobserve(sectionRefs.expertice.current);
      }
    };
  }, []);
  const scrollToSection = (section) => {
    sectionRefs[section].current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={styles.main}>
      <Section id="// home" title="home" ref={sectionRefs.home}>
        <Header />
        <div className={styles["img-container"]}>
          <img
            src="/tamalsen-home-cover.jpeg"
            alt="Home Cover"
            className={styles.img}
          />
          <div className={styles["gradient-overlay"]}></div>
          <div className={styles.titleName}>
            <h1>AIMINO FRANCISCO</h1>
          </div>
          <div className={styles.circleMotion}>
            <RotatingCircles />
          </div>
          <div className={styles.titleSecondary}>
            <motion.h3
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              BACKEND, FRONTEND & APP DEVELOPER.
            </motion.h3>
          </div>
          <div
            className={styles["arrow-container"]}
            style={{ cursor: "pointer" }}
          >
            <AnimatedArrow onClick={() => scrollToSection("expertice")} />
          </div>
        </div>
      </Section>
      <Section
        className={styles.cutomSelection}
        id="// expertice"
        title="expertice"
        ref={sectionRefs.expertice}
      >
        <div className={styles.parentContainer}>
          <h1 className={styles.titleExperiencia}>Mi experiencia</h1>
          <div className={styles.containerExperiencia}>
            <motion.div
              className={styles.cuadrados}
              data-glow
              initial={{ opacity: 0, x: 300 }} // El cuadrado comienza desde la derecha
              animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 300 }} // La animación se activa cuando está en vista
              transition={{ duration: 1.5 }}
            >
              <div className={styles.cuadroContent}>
                <div className={styles.topRow}>
                  <div className={styles.iconoMobile}>
                    <FontAwesomeIcon size="2x" color="#66D9ED" icon={faReact} />
                  </div>
                  <div className={styles.tituloSegundo}>Dev front-end</div>
                </div>
                <div className={styles.bottomRow}>
                  <div className={styles.parrafoPrimero}>
                    <p>
                      Apasionado por la interfaz de usuario y la experiencia de
                      usuario. Más de 2 años de experiencia en desarrollo en
                      frameworks HTML, CSS, JS, React y NextJS.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              className={styles.cuadrados}
              data-glow
              initial={{ opacity: 0, x: 300 }} // Los cuadrados adicionales comienzan desde la derecha
              animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 300 }}
              transition={{ duration: 1.5, delay: 0.2 }} // Añade retraso para secuencia
            >
              <div className={styles.cuadroContent}>
                <div className={styles.topRow}>
                  <div className={styles.iconoMobile}>
                    <FontAwesomeIcon
                      size="2x"
                      color="#D1CDCD"
                      icon={faMobileScreenButton}
                    />
                  </div>
                  <div className={styles.tituloSegundo}>Desarrollo Mobile</div>
                </div>
                <div className={styles.bottomRow}>
                  <div className={styles.parrafoSegundo}>
                    <p>
                      Apasionado por la creación de experiencias móviles
                      intuitivas, experiencia en desarrollo de aplicaciones
                      usando React Native y Material UI para interfaces
                      altamente interactivas y visualmente atractivas.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              className={styles.cuadrados}
              data-glow
              initial={{ opacity: 0, x: 300 }} // Los cuadrados adicionales comienzan desde la derecha
              animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 300 }}
              transition={{ duration: 1.5, delay: 0.4 }} // Añade retraso para secuencia
            >
              <div className={styles.cuadroContent}>
                <div className={styles.topRow}>
                  <div className={styles.iconoMobile}>
                    <FontAwesomeIcon size="2x" color="#6FB352" icon={faNode} />
                  </div>
                  <div className={styles.tituloPrimero}>Dev back-end</div>
                </div>
                <div className={styles.bottomRow}>
                  <div className={styles.parrafo}>
                    <p>
                      Desarrollador backend con 2 años de experiencia en
                      Node.js, utilizando Sequelize como ORM para la gestión de
                      datos en bases de datos relacionales como PostgreSQL, así
                      como en bases de datos no relacionales como MongoDB.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          {/* <div className={styles.cponteinerImgCoding}>
            <img src="/coding.png" alt="Home Cover" className={styles.imgCoding} />
          </div> */}
        </div>
      </Section>
      <Section
        className={styles.cutomSelectionExperiencia}
        id="// experience"
        title="experience"
        ref={sectionRefs.experience}
      >
        <div className={styles.parentContainerAcordion}>
          <h1 className={styles.titleProfessionalExperience}>
           Experiencia Profesional
          </h1>

          <AccordionProfessionalExpertise />
        </div>
      </Section>
      <Section
        ref={sectionRefs.challenges}
        className={styles.cutomSelectionExperiencia}
        id="// challenges"
        title="Challenges"
      >
        <div className={styles.parentContainerAcordion}>
          <h1 className={styles.titleProfessionalExperience}>Challenges</h1>

          <AccordionChallenge></AccordionChallenge>
        </div>
      </Section>
      <Section  ref={sectionRefs.contact} id="// contact" title="contact">
      <div className={styles.parentContainerAcordion}>
          <h1 className={styles.titleProfessionalExperience}>
            Contacto
          </h1>
          <Contact></Contact> 
        </div>
        
      </Section>
    </div>
  );
}
