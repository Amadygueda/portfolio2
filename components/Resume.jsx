import React from "react";
import resumeFile from "../documents/resume.pdf";

const Resume = ({ classicHeader, darkTheme }) => {
  const educationDetails = [
    {
      yearRange: "2022 - 2024",
      title: "DEC en Programmation Informatique",
      place: "La Cité Collégiale, Ottawa, Ontario, Canada",
      desc: "Formation approfondie en développement web full stack, couvrant HTML, CSS, JavaScript, React, Node.js, Express.js, SQL et NoSQL.",
    },
    {
      yearRange: "2018 - 2021",
      title: "Licence en Génie Informatique",
      place: "École Polytechnique de Dakar, Sénégal",
      desc: "Études en ingénierie informatique, couvrant des domaines tels que le développement de logiciels, la gestion des systèmes d'information et les réseaux.",
    },
  ];

  const experienceDetails = [
    {
      yearRange: "2023 - Présent",
      title: "Stage Développeur Full Stack",
      place: "Tech Solutions, Ottawa (Télétravail)",
      desc: "Responsable du développement d'applications web full stack, intégrant des interfaces utilisateur réactives et des systèmes back-end robustes.",
    },
    {
      yearRange: "2022 - 2023",
      title: "Stage Développeur Back-End",
      place: "Creative Web, Ottawa (Télétravail)",
      desc: "Développement de systèmes back-end performants en utilisant Node.js et Express.js, et intégration avec des bases de données SQL et NoSQL.",
    },
    {
      yearRange: "2021 - 2022",
      title: "Stage Développeur Front-End",
      place: "Innovative Apps, Montréal (Télétravail)",
      desc: "Création d'interfaces utilisateur dynamiques en utilisant HTML, CSS, JavaScript et React, améliorant l'expérience utilisateur et l'engagement.",
    },
  ];

  const skills = [
    {
      name: "HTML/CSS",
      percent: 98,
    },
    {
      name: "JavaScript",
      percent: 95,
    },
    {
      name: "React JS",
      percent: 90,
    },
    {
      name: "Angular",
      percent: 85,
    },
    {
      name: "Bootstrap",
      percent: 95,
    },
    {
      name: "Node.js",
      percent: 92,
    },
    {
      name: "Express.js",
      percent: 90,
    },
    {
      name: "SQL/NoSQL",
      percent: 88,
    },
    {
      name: "TypeScript",
      percent: 85,
    },
    {
      name: "GraphQL",
      percent: 80,
    },
    {
      name: "Docker",
      percent: 75,
    },
    {
      name: "Kubernetes",
      percent: 70,
    },
  ];

  return (
    <section
      id="resume"
      className={"section " + (darkTheme ? "bg-dark-1" : "")}
    >
      <div className={"container " + (classicHeader ? "" : "px-lg-5")}>
        {/* Heading */}
        <div className="position-relative d-flex text-center mb-5">
          <h2
            className={
              "text-24 text-uppercase fw-600 w-100 mb-0 " +
              (darkTheme ? "text-muted opacity-1" : "text-light opacity-4")
            }
          >
            Résumé
          </h2>
          <p
            className={
              "text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
              (darkTheme ? "text-white" : "text-dark")
            }
          >
            {" "}
            CV
            <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
          </p>
        </div>
        {/* Heading end*/}
        <div className="row gx-5">
          {/* My Education */}
          <div className="col-md-6">
            <h2
              className={
                "text-6 fw-600 mb-4 " + (darkTheme ? "text-white" : "")
              }
            >
              Mon Éducation
            </h2>
            {educationDetails.length > 0 &&
              educationDetails.map((value, index) => (
                <div
                  key={index}
                  className={
                    "bg-white rounded p-4 mb-4 " +
                    (darkTheme ? "bg-dark" : "bg-white border")
                  }
                >
                  <p className="badge bg-primary text-2 fw-400">
                    {value.yearRange}
                  </p>
                  <h3 className={"text-5 " + (darkTheme ? "text-white" : "")}>
                    {value.title}
                  </h3>
                  <p className={darkTheme ? "text-primary" : "text-danger"}>
                    {value.place}
                  </p>
                  <p className={"mb-0 " + (darkTheme ? "text-white-50" : "")}>
                    {value.desc}
                  </p>
                </div>
              ))}
          </div>
          {/* My Experience */}
          <div className="col-md-6">
            <h2
              className={
                "text-6 fw-600 mb-4 " + (darkTheme ? "text-white" : "")
              }
            >
              Mon Expérience
            </h2>
            {experienceDetails.length > 0 &&
              experienceDetails.map((value, index) => (
                <div
                  key={index}
                  className={
                    "bg-white rounded p-4 mb-4 " +
                    (darkTheme ? "bg-dark" : "bg-white border")
                  }
                >
                  <p className="badge bg-primary text-2 fw-400">
                    {value.yearRange}
                  </p>
                  <h3 className={"text-5 " + (darkTheme ? "text-white" : "")}>
                    {value.title}
                  </h3>
                  <p className={darkTheme ? "text-primary" : "text-danger"}>
                    {value.place}
                  </p>
                  <p className={"mb-0 " + (darkTheme ? "text-white-50" : "")}>
                    {value.desc}
                  </p>
                </div>
              ))}
          </div>
        </div>
        {/* My Skills */}
        <h2
          className={
            "text-6 fw-600 mt-4 mb-4 " + (darkTheme ? "text-white" : "")
          }
        >
          Mes Compétences
        </h2>
        <div className="row gx-5">
          {skills.length > 0 &&
            skills.map((skill, index) => (
              <div key={index} className="col-md-6">
                <p
                  className={
                    "fw-500 text-start mb-2 " +
                    (darkTheme ? "text-light" : "text-dark")
                  }
                >
                  {skill.name}{" "}
                  <span className="float-end">{skill.percent}%</span>
                </p>
                <div
                  className={
                    "progress progress-sm mb-4 " + (darkTheme ? "bg-dark" : "")
                  }
                >
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: skill.percent + "%" }}
                    aria-valuenow={skill.percent}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>
            ))}
        </div>
        <div className="text-center mt-5">
          <a
            className="btn btn-outline-secondary rounded-pill shadow-none"
            href={resumeFile}
            download
          >
            Télécharger CV
            <span className="ms-1">
              <i className="fas fa-download" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;

