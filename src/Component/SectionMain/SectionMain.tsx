import "./SectionMain.css"
import { Parallax } from 'react-parallax';
import {useState} from 'react';

const SectionMain = () =>{
const [showDiv, setShowDiv] = useState<boolean>(false)
const [showDiv2, setShowDiv2] = useState<boolean>(false)
const [showDiv3, setShowDiv3] = useState<boolean>(false)
const [showDiv4, setShowDiv4] = useState<boolean>(false)


const showDivLeistung = ()=>{
    setShowDiv(!showDiv)
}
const showDivLeistung2 = ()=>{
    setShowDiv2(!showDiv2)
}
const showDivLeistung3 = ()=>{
    setShowDiv3(!showDiv3)
}
const showDivLeistung4 = ()=>{
    setShowDiv4(!showDiv4)
}

    return(
        <section className="sectionMain">
            
            
             <Parallax className="parallax" bgImage="/img/img6.jpg"  strength={800}>
             <h1>Ihr Handwerker</h1>
             
    </Parallax>
             <Parallax className="parallax1" bgImage="/img/img7.jpg"  strength={800}>
             
             <div className="divFirstImg">
                 
                <h2>Ihr Wunsch ist unsere Leidenschaft</h2>

                <p>Wir sind ein Unternehmen, das mit voller Hingabe die Wünsche der Kunden erfüllt.
                    Unser Können und jahrelange Erfahrung hat stets unter Beweis gestellt, was alles möglich ist,
                    mit Facharbeitern und professionellen Arbeitsgeräte schaffen wir jede Renovierungsarbeit.           
                     </p>
                <div>
                <a href="#leistungen"  rel="noreferrer" className="movie-flip" data-back="Leistungen" data-front="Leistungen"> </a>
                <a href="https://the-movie-app-2021.netlify.app/" target="_blank" rel="noreferrer" className="movie-flip1" data-back="Kontakt" data-front="Kontakt"> </a>
                </div>
            </div>
    </Parallax>
             <Parallax className="parallax2" bgImage="/img/img2.jpg"  strength={800}>
             <div className="divSecondImg">
                <h2>Unsere leistungen</h2>
                <div 
                id="leistungen"
                className="leistungen"
               
                >
                    <div>
                        {/* <button 
                        className="btnShow"
                        onClick={showDivLeistung}>Raumausstattung</button> */}
                         <a onClick={showDivLeistung} rel="noreferrer" className="movie-flip" data-back="Raumausstattung" data-front="Raumausstattung"> </a>
                        
                        <div className="leistungOneRaumausstatter"
                         style={{
                            height: showDiv ? "300px" : "0px",
                            opacity: showDiv ? "1" : "0",
                            // backgroundColor: showDiv ? "#a0d2eb": "white"
                        }}
                        >
                            {/* <p
                             style={{
                                opacity: showDiv ? "1" : "0",
                                
                            }}
                            >Raumaustattung ? Da sind sie b ei uns richtig mit viel Erfahrung und können statten wir ihr Haus oder Wohnung mit den Modernsten
                            Ausstattungen aus
                            </p> */}
                        </div>
                    </div>
                    <div>
                    {/* <button 
                        className="btnShow"
                        onClick={showDivLeistung2}>Fliesen</button> */}
                        <a onClick={showDivLeistung2} rel="noreferrer" className="movie-flip" data-back="Fliesen" data-front="Fliesen"> </a>
                        <div className="leistungOneFliesenleger"
                         style={{
                            height: showDiv2 ? "300px" : "0px",
                            opacity: showDiv2 ? "1" : "0",
                            backgroundColor: showDiv2 ? "rgba(123, 123, 123, 0.8)": "white"
                        }}
                        >
                            {/* <p
                             style={{
                                opacity: showDiv2 ? "1" : "0",
                                
                            }}
                            >Wir verlegen professionell Fliesen aller farben und formen.</p> */}
                        </div>
                    </div>
                    <div>
                    {/* <button 
                        className="btnShow"
                        onClick={showDivLeistung3}>Parkett</button> */}
                        <a onClick={showDivLeistung3} rel="noreferrer" className="movie-flip" data-back="Parkett" data-front="Parkett"> </a>
                    <div className="leistungOneParkettleger"
                         style={{
                            height: showDiv3 ? "300px" : "0px",
                            opacity: showDiv3 ? "1" : "0",
                            backgroundColor: showDiv3 ? "rgba(123, 123, 123, 0.7)": "white"
                        }}
                        >
                            {/* <p
                             style={{
                                opacity: showDiv3 ? "1" : "0",
                                
                            }}
                            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, adipisci.</p> */}
                        </div>
                    </div>
                    <div>
                    {/* <button 
                        className="btnShow"
                        onClick={showDivLeistung4}>Fenster,Türen...</button> */}
                        <a onClick={showDivLeistung4} rel="noreferrer" className="movie-flip" data-back="Fenster,Türen" data-front="Fenster,Türen"> </a>
                    <div className="leistungOneFenster"
                         style={{
                            height: showDiv4 ? "300px" : "0px",
                            opacity: showDiv4 ? "1" : "0",
                            backgroundColor: showDiv4 ? "rgba(123, 123, 123, 0.8)": "white"
                        }}
                        >
                            {/* <p
                            style={{
                                opacity: showDiv4 ? "1" : "0",
                                
                            }}
                            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, adipisci.</p> */}
                        </div>
                    </div>
                   
                </div>
                <div>
               
                </div>
            </div>
    </Parallax>
    
        </section>
    )
}

export default SectionMain