import React from "react";
import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faFileArrowDown } from "@fortawesome/free-solid-svg-icons";
import ZoomableImage from "../ZoomableImage/ZoomableImage";

const Contact = () => {
  return (
    <div className="containerContact">
      <div className="contentContact">
        <div className="textContainer">
          <div style={{ fontSize: "2rem", color: "#FFF", fontWeight: "700" }}>
            Disponible para oportunidades independientes y en equipo.
          </div>
          <div
            style={{
              fontFamily: "roboto mono",
              fontSize: "1.2rem",
              color: "#9e9e9e",
              margin: "20px",

              marginTop: "30px",
            }}
          >
            ¿Tienes un proyecto interesante con el que necesitas ayuda? ¡Envíame
            un correo electrónico o contáctame por mensaje instantáneo!
          </div>
          <div className="contactDetails">
            <div>franciscoaimino2001@gmail.com</div>
            <div>Tel: +54 9 3513370336</div>
          </div>
          <div className="linksContainer">
            <div className="social-icons-wrapper">
              <div className="social-icon-item linkedin-link">
                <a
                  href="https://www.linkedin.com/in/francisco-aimino-471436211/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-item"
                >
                  <div className="socialicon  ">
                    <div className="socialiconcircle1 linkedincolor"></div>
                    <div className="socialiconcircle2">
                      <FontAwesomeIcon
                        className="icons"
                        color="#0e76a8"
                        icon={faLinkedin}
                      />
                    </div>
                  </div>{" "}
                  <div className="contactLinks">
                    <a
                      href="https://www.linkedin.com/in/francisco-aimino-471436211/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      LinkedIn
                    </a>
                  </div>
                </a>
              </div>

              <div className="social-icon-item  github-link">
                <a
                  href="https://github.com/AiminoFrancisco"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-item"
                >
                  <div className="socialicon  ">
                    <div className="socialiconcircle1 githubcolor"></div>
                    <div className="socialiconcircle2">
                      <FontAwesomeIcon
                        className="icons"
                        color="#171515"
                        icon={faGithub}
                      />
                    </div>
                  </div>
                  <div className="contactLinksGitHub">
                    <a
                      href="https://github.com/AiminoFrancisco"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>
                  </div>
                </a>
              </div>
              <div className="social-icon-item whatsapp-link">
                <a
                  href="https://wa.me/5493513370336"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="whatsapp-button"
                >
                  <div className="socialicon">
                    <div className="socialiconcircle1 whatsappcolor"></div>
                    <div className="socialiconcircle2">
                      <FontAwesomeIcon
                        className="icons"
                        color="#40BF50"
                        icon={faWhatsapp}
                      />
                    </div>
                  </div>
                  <div className="contactLinksWhatsapp">WhatsApp</div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="imgWrapper">
          <div className="imgHeader">
            <div className="titleReco">Carta de recomendación</div>
          </div>
          <div className="imgWrapper">
            <div className="imgContainerReco">
              <ZoomableImage src="/recoFran.png" alt="Imagen de contacto" />
            </div>
            <a
              href="/recoFran.png"
              download="recoFran.png"
              className="zoomIcon"
            >
              <span className="contactDescargarImg">Descargar</span>
              <FontAwesomeIcon
                color="#e4e4e4"
                icon={faFileArrowDown}
                style={{ height: "25px", width: "25px" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
