import React from "react";
import Slider from "react-slick";

const Testimonials = ({ classicHeader, darkTheme }) => {
  const reviews = [
    {
      name: "Jean Dupont",
      position: "CEO, Tech Solutions",
      src: "images/testimonial/hom1.jpg",
      desc: "Amady Gueda Badji est un développeur full stack exceptionnel. Il a transformé notre site web avec des interfaces utilisateur réactives et des systèmes back-end robustes. Son expertise en HTML, CSS, JavaScript et React est remarquable.",
      rating: 5,
    },
    {
      name: "Marie Lavigne",
      position: "CTO, Innovative Apps",
      src: "images/testimonial/fem1.jpeg",
      desc: "Travailler avec Amady a été un véritable plaisir. Il a une compréhension approfondie de Node.js et Express.js, ce qui a permis de créer des API efficaces et sécurisées pour notre application. Sa capacité à résoudre les problèmes et à optimiser les performances est inégalée.",
      rating: 5,
    },
    {
      name: "Ahmed Ben Ali",
      position: "Product Manager, Creative Web",
      src: "images/testimonial/hom2.png",
      desc: "Amady est un développeur full stack talentueux qui excelle tant en front-end qu'en back-end. Sa maîtrise des bases de données SQL et NoSQL a été cruciale pour notre projet. Il est toujours à l'écoute et propose des solutions innovantes.",
      rating: 5,
    },
    {
      name: "Sophie Martin",
      position: "Project Lead, Digital Innovators",
      src: "images/testimonial/fem2.jpg",
      desc: "Grâce à Amady, nous avons pu lancer notre application web dans les délais et avec des fonctionnalités avancées. Sa connaissance de Flexbox, Bootstrap et des pratiques de déploiement a été un atout précieux. Je recommande vivement Amady pour tout projet de développement web.",
      rating: 5,
    },
  ];

  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <section
      id="testimonial"
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
            Témoignages
          </h2>
          <p
            className={
              "text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
              (darkTheme ? "text-white" : "text-dark")
            }
          >
            {" "}
            Avis des Clients
            <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
          </p>
        </div>
        {/* Heading end*/}

        <Slider {...settings}>
          {reviews.length > 0 &&
            reviews.map((value, index) => (
              <div className="item" key={index}>
                <div
                  className={
                    "rounded p-5 " + (darkTheme ? "bg-dark" : "bg-light")
                  }
                >
                  <div className="d-flex align-items-center mt-auto mb-4">
                    <img
                      className="img-fluid rounded-circle border d-inline-block w-auto"
                      src={value.src}
                      alt={value.name}
                    />
                    <p className="ms-3 mb-0">
                      <strong
                        className={
                          "d-block fw-600 " +
                          (darkTheme ? "text-white" : "text-dark")
                        }
                      >
                        {value.name}
                      </strong>
                      <span className="text-muted fw-500">
                        {" "}
                        {value.position}{" "}
                      </span>
                    </p>
                  </div>
                  <p
                    className={
                      "fw-500 mb-4 " + (darkTheme ? "text-white" : "text-dark")
                    }
                  >
                    “{value.desc}”
                  </p>
                  <span className="text-2">
                    {[...Array(value.rating)].map((star, i) => (
                      <i className="fas fa-star text-warning" key={i} />
                    ))}
                  </span>
                </div>
              </div>
            ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
