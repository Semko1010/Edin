import { Parallax } from 'react-parallax';
import "./Footer.css"
const Footer = () =>{

    return(

<Parallax className="parallax3" bgImage="/img/img11.jpg"  strength={400}>
    <div className="footerDiv">
            <h4>Kontakt</h4>
             <form id="footer" className="form" action="">
            <input placeholder="Name" type="text" name="" id="" />
            <input placeholder="Email" type="text" name="" id="" />
            <input  placeholder="Nachricht" type="text" name="" id="" />
            
            <a href="#test"  rel="noreferrer" className="Contact" data-back="Senden" data-front="Email"> </a>
           

            </form>
           

         <footer>
           
            <div>
                <h2>Kontakt</h2>
                <p className="email">Email: hamidovicedin@live.de</p>
                <p className="email">Telefon: 01742732640</p>
                
            </div>

            <div>
                <h2>Adresse</h2>
                <p className="subscribe">67657 Kaiserslautern</p>
                <p>Freidenstraße .50</p>
            </div>

            <div>
                <h2>Leistungen</h2>
                <p>Raumaustattung/ Fenster,Türen</p>
                <p>Fliesen/Parkett</p>
                
                
            </div>


        </footer>
        </div>
    </Parallax>

    )
}

export default Footer