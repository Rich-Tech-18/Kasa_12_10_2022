import '../styles/Footer.css';
import logo from '../assets/logoFooter.svg';

function Footer(){
    return(
        <footer className='footer'>
         <img src={logo} alt='logo du site'></img>
        <p>© 2020 Kasa. All rights reserved</p>   
        </footer>
        
    );
}

export default Footer;