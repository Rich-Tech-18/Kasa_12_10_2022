import {useState} from 'react';
import arrowUp from '../assets/arrowUp.svg';
import arrowDown from '../assets/arrowDown.svg';
import List from './List';
import '../styles/Accordion.css';


function AccordionWithList(props){
    const [isActive, setIsActive] = useState(false);
    return (
    <div className="accordionList">
        <div className="accordion-item">
          <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
            <div>{props.title}</div>
            <div>{isActive ? <img src={arrowUp} alt='icon'/> : <img src={arrowDown} alt='icon'/> }</div>
          </div>
          {isActive && <ul className="accordion-content"><List elem={props.content}/></ul>}
        </div>
    </div>
    )
}

export default AccordionWithList;