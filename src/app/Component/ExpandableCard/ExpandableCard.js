import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./ExpandableCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const AccordionItem = ({ title, date, children, isOpen, onClick }) => {
  return (
    <div>
      <div
        className={`accordion-header ${isOpen ? "active" : ""}`}
        onClick={onClick}
      >
        <div className="title-container">
          <div className="title">{title}</div>
          <div className="date">{date}</div>
        </div>
        <span className={`toggle-icon ${isOpen ? "open" : ""}`}>
          {isOpen ? "-" : "+"}
        </span>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="accordion-body"
            initial={{ height: 0, opacity: 0, scaleY: 0 }}
            animate={{ height: "auto", opacity: 1, scaleY: 1 }}
            exit={{ height: 0, opacity: 0, scaleY: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }} // Ajusta la duración aquí
            style={{ overflow: "hidden" }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const AccordionProfessionalExpertise = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <div className="accordion">
        <AccordionItem
          title="Front-end in Wellet"
          date="Mayo-2023 - Present"
          isOpen={openIndex === 0}
          onClick={() => handleToggle(0)}
        >
         
          <div>
         Proximamente...
          </div>

          {/* Agrega más contenido aquí si es necesario */}
        </AccordionItem>
      </div>
      <div className="accordion">
        <AccordionItem
          title="Fullstack Developer in Onfocus Gett "
          date="Enero 2023 - Octubre 2024"
          isOpen={openIndex === 1}
          onClick={() => handleToggle(1)}
        >
          <div class="fake-button">React.JS</div>
          <div class="fake-button">React Native</div>
          <div class="fake-button">Node.JS</div>
          <div class="fake-button">JavaScript</div>
          <div class="fake-button">Python</div>
          <div class="fake-button">Sequelize</div>
          <div class="fake-button">Git</div>
          <div class="fake-button">Redux</div>
          <div class="fake-button">Jira</div>
          <div class="fake-button">PostgreSQL</div>
          <div class="fake-button">MongoDB</div>

          <div className="container">
            <div className="content">
              <div className="text">
                <div className="description">
                  <div className="experienceItem">
                    <span className="titulosDeExperiencias" style={{fontSize:'22px'}}>
                      Mantener y Desarrollar Webs y App Móviles:
                    </span>
                    <span
                      className="descriptionDeTitulosExperienciaLeft"
                    
                    >
                      Mantención y desarrollo de dos páginas web y una
                      App móvil, cada una con sus respectivos backends y
                      bases de datos, asegurando su funcionamiento óptimo y su
                      integración completa.
                      <br></br>
                      <br></br>
                      Esto implicó la implementación de nuevas funcionalidades,
                      la resolución de problemas técnicos, la optimización del
                      rendimiento, y la actualización continua de las
                      tecnologías utilizadas. Mi trabajo abarcó tanto el
                      front-end como el back-end, garantizando una experiencia
                      de usuario fluida y eficiente en todas las plataformas.
                    </span>
                  </div>
                  <div className="experienceItem">
                    <span className="titulosDeExperiencias">Frontend</span>
                    <ul className="descriptionDeTitulosExperiencia">
                      <li>
                        <span className="bordeNaranja">React </span>: Desarrollo
                        de interfaces de usuario dinámicas y responsivas.
                      </li>
                      <li>
                        <span className="bordeNaranja">React Native </span>:
                        Creación de aplicaciones móviles nativas para iOS y
                        Android.
                      </li>
                      <li>
                        <span className="bordeNaranja">Redux y Router </span>:
                        Gestión del estado de la aplicación y navegación
                        eficiente.
                      </li>
                      <li>
                        <span className="bordeNaranja"> Material UI </span>:
                        Implementación de componentes estilizados y accesibles.
                      </li>
                    </ul>
                  </div>
                  <div className="experienceItem">
                    <span className="titulosDeExperiencias">Backend</span>
                    <ul className="descriptionDeTitulosExperiencia">
                      <li>
                        <span className="bordeNaranja">Node </span>: Desarrollo
                        de servidores y APIs eficientes.
                      </li>
                      <li>
                        <span className="bordeNaranja">Sequelize </span>:
                        Gestión y manipulación de bases de datos SQL.
                      </li>
                      <li>
                        <span className="bordeNaranja">PostgreSQL </span>:
                        Administración de bases de datos relacionales.
                      </li>
                      <li>
                        <span className="bordeNaranja">MongoDB </span>: Gestión
                        de bases de datos NoSQL.
                      </li>
                    </ul>
                  </div>
                  <div className="experienceItem">
                    <span className="titulosDeExperiencias">
                      Implementación de inteligencia artificial
                    </span>
                    <ul className="descriptionDeTitulosExperiencia">
                      <li>
                        <span className="bordeNaranja"> Python </span>
                      </li>
                    </ul>
                  </div>
                  <div className="experienceItem">
                    <span className="titulosDeExperiencias">
                      Herramientas y Metodologías
                    </span>
                    <ul className="descriptionDeTitulosExperiencia">
                      <li>
                        <span className="bordeNaranja">Git </span>: Control de
                        versiones y colaboración en proyectos.
                      </li>
                      <li>
                        <span className="bordeNaranja">Jira y Kanban </span>:
                        Gestión ágil de proyectos.
                      </li>
                      <li>
                        <span className="bordeNaranja">GitLab y GitFlow </span>:
                        Flujo de trabajo eficiente en repositorios.
                      </li>
                    </ul>
                  </div>
                  <div className="experienceItem">
                    <span className="titulosDeExperiencias">Diseño UX/UI</span>
                    <span className="descriptionDeTitulosExperienciaLeft">
                      Enfoque integral en la experiencia del usuario y la
                      interfaz de usuario, garantizando productos intuitivos y
                      atractivos.
                    </span>
                  </div>
                </div>
              </div>
              <div className="image">
                <img
                  src="/mockupGett.png"
                  alt="Home Cover"
                  className="imgGett"
                />
                <img src="/gettPc.png" alt="Home Cover" className="imgGett" />
              </div>
            </div>
          </div>
        </AccordionItem>
      </div>
    </>
  );
};

export default AccordionProfessionalExpertise;
