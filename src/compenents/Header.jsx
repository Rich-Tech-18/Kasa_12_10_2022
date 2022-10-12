import React from 'react';
import '../styles/Header.css';
import Logo from './Logo';
import Navbar from './Navbar';

function Header() {
	return (
		<header className='header'>
			<React.Fragment><Logo /><Navbar /></React.Fragment>
		</header>
		
	)
}
    
   export default Header;