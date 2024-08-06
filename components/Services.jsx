import React from "react";

const Services = ({ classicHeader, darkTheme }) => {
  // services details
  const services = [
    {
      name: "Développement Front-end",
      desc: "Je crée des interfaces utilisateur dynamiques et réactives en utilisant HTML, CSS, JavaScript, et React.",
      icon: "fas fa-code",
    },
    {
      name: "Développement Back-end",
      desc: "Je construis des serveurs robustes et évolutifs avec Node.js et Express.js pour gérer les besoins de votre application.",
      icon: "fas fa-server",
    },
    {
      name: "Bases de Données",
      desc: "Je conçois et gère des bases de données relationnelles et non relationnelles (SQL, NoSQL) pour assurer le stockage et la récupération efficaces des données.",
      icon: "fas fa-database",
    },
    {
      name: "Intégration API",
      desc: "Je développe et intègre des API RESTful pour permettre la communication entre différents services et applications.",
      icon: "fas fa-plug",
    },
    {
      name: "Déploiement et Hébergement",
      desc: "Je déploie des applications web sur des plateformes cloud telles que Heroku et assure leur fonctionnement continu et sécurisé.",
      icon: "fas fa-cloud",
    },
    {
      name: "Maintenance et Support",
      desc: "Je fournis des services de maintenance et de support pour garantir que vos applications restent à jour et fonctionnelles.",
      icon: "fas fa-tools",
    }
  ];

  return (
    <section
      id="services"
      className={"section " + (darkTheme ? "bg-dark-2" : "bg-light")}
    >
      <div className={"container " + (classicHeader ? "" : "px-lg-5")}>
        {/* Heading */}
        <div className="position-relative d-flex text-center mb-5">
          <h2
            className={
              "text-24 text-uppercase fw-600 w-100 mb-0 " +
              (darkTheme ? "text-white-50 opacity-1" : "text-light opacity-4")
            }
          >
            Services
          </h2>
          <p
            className={
              "text-9 fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
              (darkTheme ? "text-white" : "text-dark")
            }
          >
            Ce que je fais
            <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
          </p>
        </div>
        {/* Heading end*/}
        {/* content start */}
        <div className="row">
          <div className="col-lg-11 mx-auto">
            <div className="row">
              {services.length > 0 &&
                services.map((service, index) => (
                  <div className="col-md-6" key={index}>
                    <div className="featured-box style-3 mb-5">
                      <div
                        className={
                          "featured-box-icon text-primary shadow-sm rounded " +
                          (darkTheme ? "bg-dark-1" : "bg-white")
                        }
                      >
                        <i className={service.icon} />
                      </div>
                      <h3 className={darkTheme ? "text-white" : ""}>
                        {service.name}
                      </h3>
                      <p
                        className={"mb-0 " + (darkTheme ? "text-white-50" : "")}
                      >
                        {service.desc}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
        {/* content end */}
      </div>
    </section>
  );
};

export default Services;
