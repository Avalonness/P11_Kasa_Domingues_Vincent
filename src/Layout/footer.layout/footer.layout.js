import React from 'react';
import './css/footer.layout.css';
import k from '../../Shared/assets/logo/f1.png';
import a from '../../Shared/assets/logo/f2.png';
import s from '../../Shared/assets/logo/f3.png';
import a2 from '../../Shared/assets/logo/f4.png';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src={k} alt="lettre logo" />
          <img src={a} alt="lettre logo" />
          <img src={s} alt="lettre logo" />
          <img src={a2} alt="lettre logo" />
        </div>
        <p>© 2020 Kasa. All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;