import '../styles/HomeBanner.css';
import homeBanner from '../assets/Desktophome.png';
import aproposBanner from '../assets/DesktopApropos.png';
import { useLocation } from "react-router-dom";

function HomeBanner(){
    const location = useLocation()
    return (
        <section className='HomeBanner'>
        <img src={location.pathname === '/' ? homeBanner : location.pathname === '/APropos' ? aproposBanner : null} alt='paysage décorative' className={location.pathname === '/APropos' ? 'imgBanner' : ''}/>
        <p>{location.pathname === '/' ? 'Chez vous, partout et ailleurs' : location.pathname === '/APropos' ? '' : null}</p>
        </section>
    )
};

export default HomeBanner;