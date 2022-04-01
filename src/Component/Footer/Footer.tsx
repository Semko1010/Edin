import { Parallax } from 'react-parallax';
import "./Footer.css"
const Footer = () =>{

    return(

<Parallax className="parallax3" bgImage="/img/img11.jpg"  strength={800}>
             <form id="footer" className="form" action="">
            <input placeholder="Name" type="text" name="" id="" />
            <input placeholder="Email" type="text" name="" id="" />
            <input  placeholder="Nachricht" type="text" name="" id="" />

            <a   rel="noreferrer" className="Contact" data-back="Senden" data-front="Email"> </a>

            </form>
           

         <footer>
            <div>
                <h2>Edin Hamidovic</h2>
                <p>Ihr Handwerker für jede Arbeit <br/> founded and designed by <span>Ruby Bacanovic</span></p>
            </div>
            <div>
                <h2>Kontakt</h2>
                <p className="email">Email: edin1975@gmail.com</p>
                <p className="email">Telefon: 0176554455545</p>
                <p>Kontaktiere uns</p>
            </div>

            <div>
                <h2>Adresse</h2>
                <p className="subscribe">67657 Kaiserslautern</p>
                <p>Freidenstraße .50</p>
            </div>

            <div>
                <h2>Leistungen</h2>
                <p>Raumaustattung/ Fenster,Türen</p>
                <p>Fliesen</p>
                <p>Parkett</p>
                
            </div>


        </footer>
    </Parallax>

    )
}

export default Footer