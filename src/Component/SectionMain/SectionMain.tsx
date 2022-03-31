import "./SectionMain.css"
import { Parallax } from 'react-parallax';
import {useState} from 'react';

const SectionMain = () =>{
const [showDiv, setShowDiv] = useState<boolean>(false)
const [showDiv2, setShowDiv2] = useState<boolean>(false)

const showDivLeistung = ()=>{
    setShowDiv(!showDiv)
}
const showDivLeistung2 = ()=>{
    setShowDiv2(!showDiv2)
}
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
                <h2>Unsere leistungen</h2>
                <div className="leistungen"
               
                >
                    <div>
                        <h3 onClick={showDivLeistung}>Raumausstatter</h3>
                        <div className="leistungOne"
                         style={{
                            height: showDiv ? "200px" : "0px",
                            opacity: showDiv ? "1" : "0",
                            backgroundColor: showDiv ? "gray": "white"
                        }}
                        >
                            <p
                             style={{
                                opacity: showDiv ? "1" : "0",
                                
                            }}
                            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, adipisci.</p>
                        </div>
                    </div>
                    <div>
                    <h3
                    onClick={showDivLeistung2}
                    >Raumausstatter</h3>
                        <div className="leistungOne"
                         style={{
                            height: showDiv2 ? "200px" : "0px",
                            opacity: showDiv2 ? "1" : "0",
                            backgroundColor: showDiv2 ? "gray": "white"
                        }}
                        >
                            <p
                             style={{
                                opacity: showDiv2 ? "1" : "0",
                                
                            }}
                            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, adipisci.</p>
                        </div>
                    </div>
                    <div>
                    <h3>Raumausstatter</h3>
                    <div className="leistungOne"
                         style={{
                            height: showDiv2 ? "200px" : "0px",
                            opacity: showDiv2 ? "1" : "0",
                            backgroundColor: showDiv2 ? "gray": "white"
                        }}
                        >
                            <p
                             style={{
                                opacity: showDiv2 ? "1" : "0",
                                
                            }}
                            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, adipisci.</p>
                        </div>
                    </div>
                    <div>
                    <h3>Raumausstatter</h3>
                    <div className="leistungOne"
                         style={{
                            height: showDiv2 ? "200px" : "0px",
                            opacity: showDiv2 ? "1" : "0",
                            backgroundColor: showDiv2 ? "gray": "white"
                        }}
                        >
                            <p
                            style={{
                                opacity: showDiv2 ? "1" : "0",
                                
                            }}
                            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, adipisci.</p>
                        </div>
                    </div>
                    <div>
                    <h3>Raumausstatter</h3>
                    <div className="leistungOne"
                         style={{
                            height: showDiv2 ? "200px" : "0px",
                            opacity: showDiv2 ? "1" : "0",
                            backgroundColor: showDiv2 ? "gray": "white"
                        }}
                        >
                            <p
                             style={{
                                opacity: showDiv2 ? "1" : "0",
                                
                            }}
                            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, adipisci.</p>
                        </div>
                    </div>
                </div>
                <div>
                {/* <a href="https://the-movie-app-2021.netlify.app/" target="_blank" rel="noreferrer" className="movie-flip" data-back="Movie App" data-front="Mehr Erfahren"> </a>
                <a href="https://the-movie-app-2021.netlify.app/" target="_blank" rel="noreferrer" className="movie-flip1" data-back="Movie App" data-front="Kontakt"> </a> */}
                </div>
            </div>
    </Parallax>
    
        </section>
    )
}

export default SectionMain