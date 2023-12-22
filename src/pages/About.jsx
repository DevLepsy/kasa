import React from "react";

import Banner from "../components/Banner.jsx";
import Collapse from "../components/Collapse.jsx";

const collapseData = [
  {
    title: "Fiabilité",
    content:
      "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.",
  },
  {
    title: "Respect",
    content:
      "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
  },
  {
    title: "Service",
    content:
      "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
  },
  {
    title: "Sécurité",
    content:
      "La sécurité est la priorité de Kasa. C'est pourquoi nous assurons un paiement 100% sécurisé pour le locataire, comme pour le propriétaire.",
  },
];

function About() {
  return (
    <div>
      <Banner />
      <div className="aboutCollapse">
        {collapseData.map((collapse, index) => (
          <Collapse
            key={index}
            title={collapse.title}
            content={collapse.content}
          />
        ))}
      </div>
    </div>
  );
}

export default About;
