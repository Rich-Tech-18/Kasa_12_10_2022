import {useParams, Navigate} from 'react-router-dom';
import datas from '../datas/datas.json';
import Carousel from '../compenents/Carousel';
import TitleAppartement from '../compenents/TitleAppartement';
import Profil from '../compenents/Profil';
import ChipsTag from '../compenents/ChipsTag';
import StarsRating from '../compenents/StarsRating';
import Accordion from '../compenents/Accordion';
import AccordionWithList from '../compenents/AccordionWithList';
import '../styles/Appartement.css';
import React from 'react';

function Appartement() {
    const param = useParams();
    const filterParam = datas.filter((title => title.id === param.idAppartement));
        if(filterParam[0] === undefined){
        return <Navigate to='/404' replace></Navigate>
        } 
    const carouselPictures = filterParam.map(picture => picture.pictures);
    const tags = filterParam.map(tag => tag.tags)[0];
    const equipements = filterParam.map(equipement => equipement.equipments);
    const carousel = [];
    const equipement = [];
    const tag = [];
    carouselPictures[0].forEach(item => 
        carousel.push(item)
        )
    tags.forEach(elem => 
        tag.push(elem)
        );
    equipements.forEach(elem => 
        equipement.push(elem)
        );
    return (
        <React.Fragment>
            <Carousel 
            picture={carousel}
            />
            {filterParam.map((item => 
            <React.Fragment key={item.id}>
                <div className='containerTitle'>
                <div className='title'>
                <TitleAppartement 
                title={item.title}
                location={item.location}
                />
                <div className='tagDisplay'>
                    {tag.map((elem => 
                    <ChipsTag
                    key={elem}
                    tag={elem}
                    />
                ))} 
                </div>
               
                </div>
                <div className='containerProfil'>
                <div className='positionProfil'>
                   <Profil 
                name={item.host.name}
                imageProfil={item.host.picture}
                /> 
                </div>
                <div className="ratingsProfil">
                <StarsRating 
                rating={parseInt(item.rating[0])}
                />
                </div>
                </div>
                </div>
                <div className='containerAccordion'>
                    <div>
                       <Accordion
                key={Object.keys(item.description)}
                title='Description'
                content={item.description}
                />  
                    </div>
                    <div>
                     <AccordionWithList 
                title= 'Équipements'
                content={equipement[0]}
                />     
                    </div>
                
                </div>             
            </React.Fragment>
                ))}    
        </React.Fragment>
        
    )
     
}

export default Appartement;