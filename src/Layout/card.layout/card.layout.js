import React from 'react';
import './css/card.layout.css';

function Card({ title, image }) {
    const cardStyle = {
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'end',
      };
    
      const beforeStyle = {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        filter: 'brightness(70%)',
        zIndex: -1,
      };
      
  return (
    <div className="card" style={cardStyle}>
      <div className="card-content">
      <div style={beforeStyle}></div>
        <h2 className="card-title">{title}</h2>
      </div>
    </div>
  );
}

export default Card;