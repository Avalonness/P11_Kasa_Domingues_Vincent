import React, { useEffect, useState } from 'react';
import "./css/home.composant.css"
import Banner from '../../Layout/banner.layout/banner.layout';
import imgBanner from "../../Shared/assets/banner_home.png"
import Card from '../../Layout/card.layout/card.layout';
import { Link } from 'react-router-dom';

function HomeComponent() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/Avalonness/P11-front-end-search-engine/master/kasa.json')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="home_main-container">
      <div>
        <Banner backgroundImage={imgBanner} texte={"Chez vous, partout et ailleurs"}/>
      </div>

      <div className='card_container'>
        {data.map((item) => (
          <Link to={`/card/${item.id}`} key={item.id}>
            <Card title={item.title} image={item.cover} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default HomeComponent;