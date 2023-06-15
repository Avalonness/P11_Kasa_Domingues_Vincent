import React, { useState } from 'react';
import './css/onglet.layout.css';
import openIcon from "../../Shared/assets/open.png"
import closeIcon from "../../Shared/assets/close.png"

function Onglet({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleTab = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='tab_container'>
        <div className="tab">
        <div className="tab_header" onClick={toggleTab}>
            <h3>{title}</h3>
            <img
            src={isOpen ? closeIcon : openIcon}
            alt={isOpen ? 'Fermer l\'onglet' : 'Ouvrir l\'onglet'}
            className="tab-icon"
            />
        </div>
        </div>
        {isOpen && (
            <div className="tab-content">
            <div className="tab-content-wrapper">{content}</div>
            </div>
        )}
    </div>
  );
}

export default Onglet;