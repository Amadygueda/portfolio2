import React from "react";

const TermsAndConditions = ({ darkTheme }) => {
  return (
    <div
      id="terms-policy"
      className="modal fade"
      role="dialog"
      aria-hidden="true"
    >
      <div
        className="modal-dialog modal-lg modal-dialog-centered"
        role="document"
      >
        <div
          className={
            "modal-content " + (darkTheme ? "bg-dark-2 text-light" : "")
          }
        >
          <div className="modal-header">
            <h5 className={"modal-title " + (darkTheme ? "text-white" : "")}>
              Termes &amp; Politique
            </h5>
            <button
              type="button"
              className={"btn-close " + (darkTheme ? "btn-close-white" : "")}
              data-bs-dismiss="modal"
              aria-label="Fermer"
            />
          </div>
          <div className="modal-body p-4">
            <p>
              Bienvenue sur notre site web. En accédant à ce site, vous acceptez nos termes et conditions. Veuillez les lire attentivement avant d'utiliser nos services.
            </p>
            <h3 className={"mb-3 mt-4 " + (darkTheme ? "text-white" : "")}>
              Conditions d'utilisation
            </h3>
            <p>
              En utilisant notre site web, vous acceptez de ne pas utiliser nos services à des fins illégales ou non autorisées. Vous acceptez de respecter toutes les lois applicables lors de l'utilisation du site.
            </p>
            <h5 className={"text-4 mt-4 " + (darkTheme ? "text-white" : "")}>
              Partie I – Informations collectées et contrôlées par Amady Gueda Badji
            </h5>
            <p>
              Nous collectons diverses informations pour fournir et améliorer nos services. Cela inclut des informations personnelles que vous fournissez volontairement lors de la création d'un compte ou de la soumission d'un formulaire de contact.
            </p>
            <h5 className={"text-4 mt-4 " + (darkTheme ? "text-white" : "")}>
              Partie II – Informations traitées par Amady Gueda Badji en votre nom
            </h5>
            <p>
              Nous pouvons traiter certaines informations en votre nom, telles que les données de paiement et les informations de compte, pour faciliter les transactions et les interactions sur notre site.
            </p>
            <h5 className={"text-4 mt-4 " + (darkTheme ? "text-white" : "")}>
              Partie III – Général
            </h5>
            <p>
              Ces termes et conditions peuvent être modifiés de temps en temps. Nous vous informerons de tout changement en publiant les nouvelles conditions sur notre site. Votre utilisation continue de nos services après la publication des modifications constitue votre acceptation des nouvelles conditions.
            </p>
            <h3 className={"mb-3 mt-4 " + (darkTheme ? "text-white" : "")}>
              Politique de confidentialité
            </h3>
            <p>
              Nous respectons votre vie privée et nous nous engageons à protéger vos informations personnelles. Cette politique de confidentialité explique comment nous collectons, utilisons et partageons vos informations.
            </p>
            <ol className="lh-lg">
              <li>
                Nous collectons des informations que vous nous fournissez directement, telles que les informations de compte et les détails de contact.
              </li>
              <li>
                Nous utilisons des technologies de suivi pour collecter des informations sur votre utilisation de notre site et améliorer nos services.
              </li>
              <li>
                Nous partageons vos informations avec des tiers uniquement dans les circonstances décrites dans cette politique, comme avec des prestataires de services qui nous aident à exploiter notre site.
              </li>
              <li>
                Vous avez le droit d'accéder à vos informations personnelles et de demander leur correction ou suppression.
              </li>
              <li>
                Nous prenons des mesures de sécurité pour protéger vos informations contre l'accès non autorisé et la divulgation.
              </li>
              <li>
                Si vous avez des questions sur cette politique de confidentialité, veuillez nous contacter.
              </li>
              <li>
                En utilisant notre site, vous acceptez les termes de cette politique de confidentialité.
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
