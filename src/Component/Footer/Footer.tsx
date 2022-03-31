import { Parallax } from 'react-parallax';
import "./Footer.css"
const Footer = () =>{

    return(

<Parallax className="parallax3" bgImage="/img/img11.jpg"  strength={800}>
             <form className="form" action="">
            <input placeholder="Name" type="text" name="" id="" />
            <input placeholder="Email" type="text" name="" id="" />
            <input  placeholder="Nachricht" type="text" name="" id="" />

            <a  id="footer" rel="noreferrer" className="Contact" data-back="Senden" data-front="Email"> </a>

            </form>
           

         <footer>
            <div>
                <h2>Edin Hamidovic</h2>
                <p>Ihr Handwerker für jede Arbeit <br/> founded and designed by <span>Ruby Bacanovic</span></p>
            </div>
            <div>
                <h2>Contact</h2>
                <p className="email">Email: edin1975@gmail.com</p>
                <p>Kontaktiere uns</p>
            </div>

            <div>
                <h2>Newsletter</h2>
                <p className="subscribe">Click here to <span> subscribe</span></p>
                <p>don´t worry. We hate spam to.</p>
            </div>

            <div>
                <h2>Hier findest du uns</h2>
                <p>Facebook</p>
                <p>Instagram</p>
                <p>Twitter</p>
            </div>


        </footer>
    </Parallax>

    )
}

export default Footer