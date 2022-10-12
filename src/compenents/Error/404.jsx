// import error from '../../assets/404.png';
import '../../styles/error404.css';
import { Link } from 'react-router-dom';

function Error404(){
    return (
        <div className='error404'>
            {/* <img src={error} alt="erreur, cette page n'existe pas" /> */}
            <p className='number'>404</p>
            <p className='paragrapheNumber'>Oups! la page que vous demmandez n'existe pas.</p>
            <Link to={'/'}><p>Retourner sur la page d'accueil</p></Link>
        </div>
    )
}

export default Error404;