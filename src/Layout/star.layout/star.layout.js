import starEmpty from '../../Shared/assets/empty_star.png';
import starFull from '../../Shared/assets/full_star.png';

function Star({ rating }) {

    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(i < rating ? starFull : starEmpty);
    }

  return (
    <div className='mid_details__rate'>
    {stars.map((star, index) => (
  <img key={index} src={star} alt="star" />
))}  
    </div> 
  );
}

  
  export default Star;