import "./SectionMain.css"
import { Parallax } from 'react-parallax';


const SectionMain = () =>{


    return(
        <section className="sectionMain">
            
            
             <Parallax className="parallax" bgImage="/img/img6.jpg"  strength={800}>
             <div className="divFirstImg">
                <h2>Ihr Wunsch ist unsere Leidenschaft</h2>

                <p>Wir sind ein Unternehmen, das mit voller Hingabe die Wünsche der Kunden erfüllt.
                    Unser Können und jahrelange Erfahrung hat stets unter Beweis gestellt, was alles möglich ist,
                    mit Facharbeitern und professionellen Arbeitsgeräte schaffen wir jede Renovierungsarbeit.           
                     </p>
                <div>
                <a href="https://the-movie-app-2021.netlify.app/" target="_blank" rel="noreferrer" className="movie-flip" data-back="Movie App" data-front="Mehr Erfahren"> </a>
                <a href="https://the-movie-app-2021.netlify.app/" target="_blank" rel="noreferrer" className="movie-flip1" data-back="Movie App" data-front="Kontakt"> </a>
                </div>
            </div>
    </Parallax>
             <Parallax className="parallax2" bgImage="/img/img2.jpg"  strength={800}>
             <div className="divSecondImg">
                <h2>Ihr Wunsch ist Leidenschaft</h2>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo natus quibusdam optio sit velit sint? Repudiandae fugit rem dolor iure sapiente dolorem illo eum, </p>
                <div>
                <a href="https://the-movie-app-2021.netlify.app/" target="_blank" rel="noreferrer" className="movie-flip" data-back="Movie App" data-front="Mehr Erfahren"> </a>
                <a href="https://the-movie-app-2021.netlify.app/" target="_blank" rel="noreferrer" className="movie-flip1" data-back="Movie App" data-front="Kontakt"> </a>
                </div>
            </div>
    </Parallax>
    
        </section>
    )
}

export default SectionMain