import React from 'react';
import '../styles/Profil.css'

function Profil(props){
    return (
        <React.Fragment>
         <h3 className='profilTitle'>{props.name}</h3>
        <img src={props.imageProfil} alt={props.name} className="profilPicture"></img>   
        </React.Fragment>
        
    )
}

export default Profil;