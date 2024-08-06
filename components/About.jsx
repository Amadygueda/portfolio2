import React from "react";
import resumeFile from "../documents/resume.pdf";
const AboutUs = ({ classicHeader, darkTheme }) => {
  return (
    <section id="about" className={"section " + (darkTheme ? "bg-dark-1" : "")}>
      <div className={"container " + (classicHeader ? "" : "px-lg-5")}>
        {/* Heading */}
        <div className="position-relative d-flex text-center mb-5">
          <h2
            className={
              "text-24  text-uppercase fw-600 w-100 mb-0 " +
              (darkTheme ? "text-muted opacity-1" : "text-light opacity-4")
            }
          >
           A propos de Moi
          </h2>
          <p
            className={
              "text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
              (darkTheme ? "text-white" : "text-dark")
            }
          >
           Apprenez à mieux me connaître
            <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
          </p>
        </div>
        {}
        <div className="row gy-5">
          {}
          <div className="col-lg-7 col-xl-8 text-center text-lg-start">
            <h2
              className={
                "text-7 fw-600 mb-3 " + (darkTheme ? "text-white" : "")
              }
            >
             Je suis  <span className="text-primary">Amady Gueda Badji,</span> développeur web full stack.
            </h2>
            <p className={darkTheme ? "text-white-50" : ""}>
            Diplômé en DEC programmation informatique de La Cité Collégiale.
             J’aide à construire l’image de marque de votre entreprise à un prix abordable. Des milliers de clients ont
              obtenu des résultats exceptionnels en travaillant avec notre équipe dédiée. Livrer du travail dans les délais
              et le budget qui répondent aux exigences du client est notre moto.

            </p>
            <p className={darkTheme ? "text-white-50" : ""}>
            Je suis spécialisé en développement web full stack avec des 
            compétences en front-end HTML, CSS, JavaScript, React et back-end Node.js, Express.js ainsi qu’en bases de données. Mes compétences couvrent les fondamentaux du développement web, HTML5, CSS3, Flexbox, Bootstrap, DOM, Grid, design web, JavaScript (ES6), ligne de commande Unix, Git et GitHub, React.js, Node.js, API, EJS, bases de données SQL et NoSQL, Express.js, et les pratiques de déploiement.

            </p>
          </div>
          {}
          {}
          <div className="col-lg-5 col-xl-4">
            <div className="ps-lg-4">
              <ul
                className={
                  "list-style-2 " +
                  (darkTheme ? "list-style-light text-light" : "")
                }
              >
                <li>
                  <span className="fw-600 me-2">Nom complet:</span>Amady Gueda Badji
                </li>
                <li>
                  <span className="fw-600 me-2">Email:</span>
                  <a href="mailto:amadyguedabadji@gmail.com">amadyguedabadji@gmail.com</a>
                </li>
                <li>
                  <span className="fw-600 me-2">Age:</span>24
                </li>
                <li className="border-0">
                  <span className="fw-600 me-2">Adresse:</span>22 rue Montmorency,gatineau
                  Qc,Canada 
                </li>
              </ul>
              <a
                href={resumeFile}
                download
                className="btn btn-primary rounded-pill"
              >
                Telecharger mon cv
              </a>
            </div>
          </div>
          {}
        </div>
        {}
        <div
          className={
            "brands-grid separator-border mt-5 " +
            (darkTheme ? "separator-border-light" : "")
          }
        >
          <div className="row">
            <div className="col-6 col-md-3">
              <div className="featured-box text-center">
                <h4
                  className={
                    "text-12  mb-0 " +
                    (darkTheme ? "text-white-50" : "text-muted")
                  }
                >
                  <span>5</span>+
                </h4>
                <p className={"mb-0 " + (darkTheme ? "text-light" : "")}>
                 Ans d'expérience
                </p>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="featured-box text-center">
                <h4
                  className={
                    "text-12  mb-0 " +
                    (darkTheme ? "text-white-50" : "text-muted")
                  }
                >
                  <span>250</span>+
                </h4>
                <p className={"mb-0 " + (darkTheme ? "text-light" : "")}>
                Clients satisfaits
                </p>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="featured-box text-center">
                <h4
                  className={
                    "text-12  mb-0 " +
                    (darkTheme ? "text-white-50" : "text-muted")
                  }
                >
                  <span>450</span>+
                </h4>
                <p className={"mb-0 " + (darkTheme ? "text-light" : "")}>
                Projets réalisés
                </p>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="featured-box text-center">
                <h4
                  className={
                    "text-12  mb-0 " +
                    (darkTheme ? "text-white-50" : "text-muted")
                  }
                >
                  <span>38</span>
                </h4>
                <p className={"mb-0 " + (darkTheme ? "text-light" : "")}>
                  Sites
                </p>
              </div>
            </div>
          </div>
        </div>
        {}
      </div>
    </section>
  );
};

export default AboutUs;
