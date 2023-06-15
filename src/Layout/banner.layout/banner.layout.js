import React from 'react';
import './css/banner.layout.css';

function Banner({ backgroundImage, texte }) {
  const bannerStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    position: 'relative',
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'rgba(0, 0, 0, 0.3)',
  };

  return (
    <div className="home_banner" style={bannerStyle}>
      <div style={overlayStyle}></div>
      <p>{texte}</p>
    </div>
  );
}


export default Banner;