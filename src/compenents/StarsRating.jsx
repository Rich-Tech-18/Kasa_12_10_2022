import starGold from '../assets/starGold.svg';
import starNone from '../assets/star.svg';
import '../styles/StarsRating.css';

function StarsRating(props) {

    return (
        <div>
            {[...Array(props.rating)].map((star, index) =>{
                return <img src={starGold} className='starGold' key={index} alt={index}/>
            })}
            {[...Array(5 - props.rating)].map((star, index) =>{
                return <img src={starNone} className='star' key={index} alt={index}/>
            })}
        </div>
    )
}

export default StarsRating;