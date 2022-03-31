import { Parallax } from 'react-parallax';
import "./Footer.css"
const Footer = () =>{

    return(
<footer>
<Parallax className="parallax3" bgImage="/img/img11.jpg"  strength={800}>
             
            <input placeholder="Name" type="text" name="" id="" />
            <input placeholder="Email" type="text" name="" id="" />
            <input  placeholder="Nachricht" type="text" name="" id="" />

            <a  id="footer" rel="noreferrer" className="Contact" data-back="Senden" data-front="Email"> </a>

            
             
    </Parallax>
</footer>
    )
}

export default Footer