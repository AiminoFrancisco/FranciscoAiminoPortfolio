import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./AcordionChallenge.css";
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

const AccordionChallenge = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <div className="accordionChallenge">
        <AccordionItem
          title="Custom Hooks Debounce"
          isOpen={openIndex === 0}
          onClick={() => handleToggle(0)}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              width: "100%",
              textAlign: "center",
            }}
          >
            <span className="challengeDescription">
              <span style={{ fontSize: "20px" }}>
                Implementación de Debounce en un custom hook
              </span>

              <span className="descriptionDeTitulosChallenge">
                Creé un custom hooks en React que incluye la funcionalidad de
                debounce para mejorar el rendimiento de las aplicaciones web. El
                debounce es una técnica que retrasa la ejecución de una función
                hasta que se deja de llamar repetidamente, lo cual es crucial en
                situaciones como la búsqueda en tiempo real o el manejo de
                eventos de teclado. Implementé estos hooks para asegurarse de
                que las aplicaciones sean más eficientes y respondan mejor a las
                interacciones del usuario. Además, documenté y compartí estos
                hooks con el equipo, promoviendo su uso en diferentes proyectos.
              </span>
            </span>
          </div>
        </AccordionItem>
      </div>
      <div className="accordionChallenge">
        <AccordionItem
          title="Paralelismo React Native"
          isOpen={openIndex === 1}
          onClick={() => handleToggle(1)}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              width: "100%",
              textAlign: "center",
            }}
          >
            <span className="challengeDescription">
              <span style={{ fontSize: "20px" }}>
                Implementación de paralelismo en React Native
              </span>

              <span className="descriptionDeTitulosChallenge">
                Trabajé en la implementación de técnicas de paralelismo en una
                aplicación en React Native para mejorar su rendimiento y
                eficiencia. Esto incluyó la división de tareas pesadas en hilos
                separados. Documenté todo el proceso y el código resultante fue
                subido a mi GitHub, proporcionando un recurso útil para otros
                desarrolladores que enfrentan desafíos similares. El paralelismo
                permitió que la aplicación manejara múltiples tareas de manera
                concurrente, mejorando la experiencia del usuario y reduciendo
                el tiempo de respuesta.
              </span>
            </span>
          </div>
        </AccordionItem>
      </div>
      <div className="accordionChallenge">
        <AccordionItem
          title="Análisis de Sentimiento"
          isOpen={openIndex === 2}
          onClick={() => handleToggle(2)}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              width: "100%",
              textAlign: "center",
            }}
          >
            <span className="challengeDescription">
              <span style={{ fontSize: "20px" }}>
                Algoritmo para determinar la ponderación en textos, evaluando si
                se habla de algo positivo o negativo
              </span>

              <span className="descriptionDeTitulosChallenge">
                Procesamiento de lenguaje natural para analizar textos y
                determinar su sentimiento. Utilicé técnicas de machine learning
                para clasificar los textos en positivos, negativos o neutros, lo
                cual ayuda a entender mejor las opiniones y feedbacks.
              </span>
            </span>
          </div>
        </AccordionItem>
      </div>
      <div className="accordionChallenge">
        <AccordionItem
          title="Reconocimiento de Imagenes"
          isOpen={openIndex === 3}
          onClick={() => handleToggle(3)}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              width: "100%",
              textAlign: "center",
            }}
          >
            <span className="challengeDescription">
              <span style={{ fontSize: "20px" }}>
                Reconocimiento de imágenes
              </span>

              <span className="descriptionDeTitulosChallenge">
                Utilización de bibliotecas de Python para el reconocimiento de
                imágenes. Desarrollé un sistema que puede identificar y
                clasificar objetos en imágenes utilizando bibliotecas avanzadas
                de Python. Esto implicó entrenar modelos de aprendizaje
                automático y optimizar su rendimiento para obtener resultados
                precisos.
              </span>
            </span>
          </div>
        </AccordionItem>
      </div>
      <div className="accordionChallenge">
        <AccordionItem
          title="Traducción de Audio a Texto"
          isOpen={openIndex === 4}
          onClick={() => handleToggle(4)}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              width: "100%",
              textAlign: "center",
            }}
          >
            <span className="challengeDescription">
              <span style={{ fontSize: "20px" }}>
                Implementación de transcripción de audios a texto y análisis de
                sentimiento de los textos resultantes
              </span>

              <span className="descriptionDeTitulosChallenge">
                Utilizando bibliotecas como cv2, numpy Y mutils. Creé un sistema
                que convierte audios en texto y luego analiza el sentimiento del
                texto transcrito. Utilicé estas librerias para
                construir y entrenar los modelos necesarios para ambas tareas,
                mejorando así la capacidad de análisis de contenido auditivo.
              </span>
            </span>
          </div>
        </AccordionItem>
      </div>
    </>
  );
};

export default AccordionChallenge;
