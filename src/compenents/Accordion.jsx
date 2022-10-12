import {useState} from 'react';
import { useParams } from 'react-router-dom';
import arrowUp from '../assets/arrowUp.svg';
import arrowDown from '../assets/arrowDown.svg';
import '../styles/Accordion.css';


function Accordion(props){
    const [isActive, setIsActive] = useState(false);
    const param = useParams();
    return (
    <div className={param.idAppartement ? 'accordionList' : 'accordion'}>
        <div className="accordion-item">
          <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
            <div>{props.title}</div>
            <div>{isActive ? <img src={arrowUp} alt='icon'/> : <img src={arrowDown} alt='icon'/> }</div>
          </div>
          {isActive && <ul className="accordion-content"><li>{props.content}</li></ul>}
        </div>
    </div>
    )
}

export default Accordion;