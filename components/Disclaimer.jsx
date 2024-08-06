
import React from "react";

const Disclaimer = ({ darkTheme }) => {
  return (
    <div
      id="disclaimer"
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
              Droits d'auteur &amp; Avertissement
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
              Ce site web et son contenu sont la propriété de Amady Gueda Badji. Toute reproduction ou distribution non autorisée de tout matériel provenant de ce site est strictement interdite.
            </p>
            <ul className="lh-lg">
              <li>
                Les informations fournies sur ce site sont uniquement à des fins d'information générale. Amady Gueda Badji décline toute responsabilité quant à l'exactitude ou l'exhaustivité de ces informations.
              </li>
              <li>
                Toute action que vous entreprenez sur la base des informations présentes sur ce site est strictement à vos propres risques. Amady Gueda Badji ne sera pas responsable des pertes et/ou dommages en relation avec l'utilisation de notre site web.
              </li>
              <li>
                Ce site peut contenir des liens vers des sites externes qui ne sont pas fournis ou maintenus par Amady Gueda Badji. Amady Gueda Badji ne garantit pas l'exactitude, la pertinence ou l'exhaustivité des informations présentes sur ces sites externes.
              </li>
              <li>
                Les logos et marques déposées utilisés sur ce site sont la propriété de leurs détenteurs respectifs.
              </li>
              <li>
                Nous nous réservons le droit de modifier ces termes et conditions à tout moment. Toute modification sera mise à jour sur cette page.
              </li>
              <li>
                En utilisant notre site, vous acceptez les termes de cet avertissement et de notre politique de confidentialité.
              </li>
              <li>
                Pour toute question concernant cet avertissement, veuillez nous contacter.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Disclaimer;
