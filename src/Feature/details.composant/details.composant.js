import React, { useEffect, useState } from 'react';
import './css/details.composant.css';
import { useParams, useNavigate } from 'react-router-dom';
import starEmpty from '../../Shared/assets/empty_star.png';
import starFull from '../../Shared/assets/full_star.png';
import Onglet from '../../Layout/onglet.layout/onglet.layout';
import previous from "../../Shared/assets/precedent.png"
import next from "../../Shared/assets/suivant.png"

function CardDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [cardData, setCardData] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/Avalonness/P11-front-end-search-engine/master/kasa.json')
      .then(response => response.json())
      .then(data => {
        const card = data.find(item => item.id === id);
        if (!card) {
          navigate('/404'); // Redirige vers la page 404 si l'ID n'est pas trouvé
        } else {
          setCardData(card);
        }
      })
      .catch(error => console.log(error));
  }, [id, navigate]);


  const { 
    title, 
    pictures, 
    description, 
    host = {}, // valeur par défaut pour éviter undefined
    rating, 
    location, 
    equipments, 
    tags 
  } = cardData;

  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(i < rating ? starFull : starEmpty);
  }

  const nextSlide = () => {
    if (pictures) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % pictures.length);
    }
  };
  
  const prevSlide = () => {
    if (pictures) {
      setCurrentIndex((prevIndex) => {
        if (prevIndex === 0) return pictures.length - 1;
        return prevIndex - 1;
      });
    }
  };

  return (
    <div className='details_container'>
        <div className='carousel_container'>
            <div>
                <button onClick={prevSlide} className='previous'><img src={previous} alt="précédent"/></button>
                {pictures && <img src={pictures[currentIndex]} alt={`slide ${currentIndex + 1}`} />}
                <div className='compteur_carousel'>{pictures && <p>{currentIndex + 1}/{pictures.length}</p>}</div>
                <button onClick={nextSlide} className='next'><img src={next} alt="suivant"/></button>
            </div>
        </div>
        <div className='header_details'>
              <div className='header_details__information'>
                  <h2>{title}</h2>
                  <p>{location}</p>
                  <div className='mid_details__tag'>
              {tags && tags.map((tag, index) => (
              <div className='tag_details' key={index}>
                  <span>{tag}</span>
              </div>
              ))} 
              </div>
            </div>
            
            <div className=' header_details_right'>
              <div className='header_details__profil'>
                    <p className='host_name'>{host?.name}</p> {/* opérateur optionnel ?. */}
                    <img src={host?.picture} alt="Propriétaire du bien immobilier"/> {/* opérateur optionnel ?. */}
                </div>

                <div className='mid_details__rate'>
                {stars.map((star, index) => (
              <img key={index} src={star} alt="star" />
            ))}  
                </div> 
            </div>
        </div>
    


        <div className='low_details'>
        <Onglet title="Description" content={description} />
        <Onglet 
            title="Equipements" 
            content={
                <ul>
                    {equipments && equipments.map((equipment, index) => (
                        <li key={index}>{equipment}</li>
                    ))}
                </ul>
                } 
            />

        </div>
    </div>
  );
}

export default CardDetails;