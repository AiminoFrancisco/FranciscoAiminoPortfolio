import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./ExpandableCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const AccordionItem = ({ title, date,imageSrc, children, isOpen, onClick }) => {
  return (
    <div>
      <div
        className={`accordion-header ${isOpen ? "active" : ""}`}
        onClick={onClick}
      >
        <div className="title-container">
          <div className="title">{title}</div>
          <img src={imageSrc} alt="Icon" className="accordion-image" />
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
            transition={{ duration: 0.5, ease: "easeOut" }}
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
          imageSrc="/wellet.jpg"
          date="Mayo-2023 - Present"
          isOpen={openIndex === 0}
          onClick={() => handleToggle(0)}
        >
          <div class="fake-button">React.JS</div>
          <div class="fake-button">JavaScript</div>
          <div class="fake-button">Git</div>
          <div class="fake-button">Redux</div>
          <div class="fake-button">Bootstrap</div>
          <div class="fake-button">Sass</div>
          <div class="fake-button">GitHub</div>
          <div class="fake-button">Slak</div>
          <div class="fake-button">Windows</div>

          <div className="container">
            <div className="content">
              <div className="text">
                <div className="description">
                  <div className="experienceItem">
                    <span
                      className="titulosDeExperiencias"
                      style={{ fontSize: "22px" }}
                    >
                      Mantener y Desarrollar Webs y App Móviles:
                    </span>
                    <span className="descriptionDeTitulosExperienciaLeft">
                      Esto conllevó la incorporación de nuevas características,
                      la solución de inconvenientes técnicos, la mejora del
                      rendimiento, y la actualización constante de las
                      tecnologías empleadas. Mi labor abarcó el front-end,
                      asegurando una experiencia de usuario fluida y eficiente
                      en todas las plataformas.
                    </span>
                  </div>
                  <div className="experienceItem">
                    <span className="titulosDeExperiencias">
                      Proyectos Realizados
                    </span>
                    <ul className="descriptionDeTitulosExperiencia">
                      <li>
                        <span className="bordeAzul">Grupo Rosa Negra </span>:
                        Implementación de un sistema de reservas para los
                        restaurantes Rosa Negra en México y Miami.
                      </li>
                      <li>
                        <span className="bordeAzul">Coco Bongo </span>:
                        Desarrollo de una plataforma para la venta de entradas a
                        eventos de Coco Bongo en todo México.
                      </li>
                    </ul>
                  </div>
                  <div className="experienceItem">
                    <span className="titulosDeExperiencias">Frontend</span>
                    <ul className="descriptionDeTitulosExperiencia">
                      <li>
                        <span className="bordeAzul">React </span>: Desarrollo de
                        interfaces de usuario dinámicas y responsivas.
                      </li>
                      <li>
                        <span className="bordeAzul">Redux y Router </span>:
                        Gestión del estado de la aplicación y navegación
                        eficiente.
                      </li>
                      <li>
                        <span className="bordeAzul"> Material UI </span>:
                        Implementación de componentes estilizados y accesibles.
                      </li>
                      <li>
                        <span className="bordeAzul">Sass</span>: Desarrollo de
                        hojas de estilo avanzadas con variables, mixins y
                        anidación para una mayor modularidad y mantenimiento del
                        código CSS.
                      </li>
                      <li>
                        <span className="bordeAzul">Bootstrap</span>:
                        Implementación de un framework de diseño responsivo con
                        una amplia gama de componentes predefinidos, facilitando
                        la creación de interfaces de usuario rápidas y
                        consistentes.
                      </li>
                    </ul>
                  </div>
                  <div className="experienceItem"></div>
                  <div className="experienceItem">
                    <span className="titulosDeExperiencias">
                      Herramientas y Metodologías
                    </span>
                    <ul className="descriptionDeTitulosExperiencia">
                      <li>
                        <span className="bordeAzul">Git </span>: Control de
                        versiones y colaboración en proyectos.
                      </li>
                      <li>
                        <span className="bordeAzul">GitHub</span>: Flujo de
                        trabajo eficiente en repositorios.
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
                  src="/Rosanegra.png"
                  alt="Home Cover"
                  className="imgGett"
                />
                <img
                  src="/cocobongo.png"
                  alt="Home Cover"
                  className="imgGett"
                />
              </div>
            </div>
          </div>
        </AccordionItem>
      </div>
      <div className="accordion">
        <AccordionItem
          title="Fullstack Developer in Onfocus Gett "
            imageSrc="/iconold.png"
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
          <div class="fake-button">Linux</div>

          <div className="container">
            <div className="content">
              <div className="text">
                <div className="description">
                  <div className="experienceItem">
                    <span
                      className="titulosDeExperiencias"
                      style={{ fontSize: "22px" }}
                    >
                      Mantener y Desarrollar Webs y App Móviles:
                    </span>
                    <span className="descriptionDeTitulosExperienciaLeft">
                      Mantención y desarrollo de dos páginas web y una App
                      móvil, cada una con sus respectivos backends y bases de
                      datos, asegurando su funcionamiento óptimo y su
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
