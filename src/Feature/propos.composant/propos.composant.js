import React from 'react';
import "./css/propos.composant.css"
import imgBannerPropos from "../../Shared/assets/banner_propos.png"
import Banner from '../../Layout/banner.layout/banner.layout';
import Onglet from '../../Layout/onglet.layout/onglet.layout';

function ProposComponent() {
  return (
    <div className='propos_container'>
      <div className='banner_container'>
        <Banner backgroundImage={imgBannerPropos} className="propos_banner"/>
      </div>
      <div className='onglet_container'>
        <Onglet title="Fiabilité" content="
 Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes." />
        <Onglet title="Respect" content="
La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme." />
        <Onglet title="Service" content="
Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question." />
        <Onglet title="Sécurité" content="
La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes." />
      </div>  
    </div>
  );
}

export default ProposComponent;