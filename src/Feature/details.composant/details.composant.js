import React, { useEffect, useState } from 'react';
import './css/details.composant.css';
import { useParams, useNavigate } from 'react-router-dom';
import Onglet from '../../Layout/onglet.layout/onglet.layout';
import Star from '../../Layout/star.layout/star.layout';
import Carrousel from '../../Layout/carrousel.layout/carrousel.layout';

function CardDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [cardData, setCardData] = useState({});

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


  return (
    <div className='details_container'>
        <Carrousel pictures={pictures} />
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

                <Star rating={rating} />
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