import React from 'react';
import { Link } from 'react-router-dom';
import "./css/error.composant.css"

function ErrorComponent() {
  return (
    <div className="error_main-container">
      <h2>404</h2>
      <p>Oups! La page que vous demandez n'existe pas !</p>
      <Link to="/">Retour à la page d'accueil</Link>
    </div>
  );
}

export default ErrorComponent;