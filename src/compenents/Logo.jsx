import logo from "../assets/logoKASA.svg";
import { Link} from "react-router-dom";
import '../styles/Logo.css';

function Logo(){
    return ( 
        <Link to={'/'}><img src={logo} alt="logo du site KASA" className="logo"></img></Link>
    )
}

export default Logo;