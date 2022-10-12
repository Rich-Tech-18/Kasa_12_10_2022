import '../styles/Navbar.css';
import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar(){
    
    return (
        <nav className='Navbar'>
            <NavLink to="/" end>Accueil</NavLink>
            <NavLink to="/APropos">A Propos</NavLink>
        </nav>
    )

}

export default Navbar;