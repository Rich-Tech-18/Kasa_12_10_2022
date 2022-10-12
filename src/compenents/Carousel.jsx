import React, { useState } from 'react';
import nextSymbol from '../assets/next.svg';
import previousSymbol from '../assets/previous.svg';
import '../styles/Carousel.css';

function Carousel(props){
    const [index, setIndex] = useState(0);
    const length = props.picture.length;

    function nextPicture() {
        setIndex(index === length - 1 ?  0 : index + 1);
    }

    function previousPicture() {
        setIndex(index === 0 ?  length - 1 : index - 1)
    }

    if(!Array.isArray(props.picture) || length < 0){
        return null;
    }
    return(
        <article className='containerCarousel'>
            {length > 1 ? <React.Fragment><img className='next' onClick={nextPicture} src={nextSymbol} alt="symbole next"/>
            <img className='previous' onClick={previousPicture} src={previousSymbol} alt="symbole previous"/></React.Fragment> : null}
           
            <img src={props.picture[index]} alt={props.picture} className={"imageCarrousel"}/>
           
            <div className='numberCarousel'><p>{index + 1}{'/'}{length}</p></div>
        </article>
    )
}

export default Carousel;