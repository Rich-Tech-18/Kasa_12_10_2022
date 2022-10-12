import React from 'react';
import '../styles/TitleAppartement.css'

function TitleAppartement(props){
    return (
        <React.Fragment>
            <h1 className='maintitle'>{props.title}</h1>
            <h2 className='secondaryTitle'>{props.location}</h2>
        </React.Fragment>
    )
}

export default TitleAppartement;