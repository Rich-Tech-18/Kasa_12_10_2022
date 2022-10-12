import '../styles/Card.css';
import { Link } from 'react-router-dom';
import React from 'react';

function Card(props){
    return (
        <React.Fragment>
            
            <article key={props.id} className='divCard'>
            <Link to={`/appartement/${props.id}`} className='LinkToAppartement'>
            <img src={props.cover}  alt={props.title} className='imgCard'/>
            <p className='pCard'>{props.title}</p>
            </Link>
            </article>
            
            
        </React.Fragment>
    );
}

export default Card;