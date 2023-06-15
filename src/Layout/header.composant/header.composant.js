import React from 'react';
import { Link } from 'react-router-dom';
import "./css/header.composant.css"
import Logo1 from "../../Shared/assets/logo/1.png"
import Logo2 from "../../Shared/assets/logo/2.png"
import Logo3 from "../../Shared/assets/logo/3.png"
import Logo4 from "../../Shared/assets/logo/4.png"

function HeaderComposant() {
  return (
    <header>
      <div className="header_main-container">
        <div className="header_logo">
            <img src={Logo1} alt="lettre logo"/>
            <img src={Logo2} alt="lettre logo"/>
            <img src={Logo3} alt="lettre logo"/>
            <img src={Logo4} alt="lettre logo"/>
        </div>

        <div className="header_nav">
            <nav>
                <ul>
                    <li><Link to="/">Acceuil</Link></li>
                    <li><Link to="/propos">A Propos</Link></li>
                </ul>
            </nav>
        </div>
      </div>
    </header>
  );
}

export default HeaderComposant;