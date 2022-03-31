import "./SectionMain.css"
import { Parallax } from 'react-parallax';
import {useState} from 'react';

const SectionMain = () =>{
const [showDiv, setShowDiv] = useState<boolean>(false)
const [showDiv2, setShowDiv2] = useState<boolean>(false)
const [showDiv3, setShowDiv3] = useState<boolean>(false)
const [showDiv4, setShowDiv4] = useState<boolean>(false)
const [showDiv5, setShowDiv5] = useState<boolean>(false)

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
const showDivLeistung5 = ()=>{
    setShowDiv5(!showDiv5)
}
    return(
        <section className="sectionMain">
            
            
             <Parallax className="parallax" bgImage="/img/img6.jpg"  strength={800}>
             <h1>Ihr Handwerker</h1>
             <div className="divFirstImg">
                 
                <h2>Ihr Wunsch ist unsere Leidenschaft</h2>

                <p>Wir sind ein Unternehmen, das mit voller Hingabe die Wünsche der Kunden erfüllt.
                    Unser Können und jahrelange Erfahrung hat stets unter Beweis gestellt, was alles möglich ist,
                    mit Facharbeitern und professionellen Arbeitsgeräte schaffen wir jede Renovierungsarbeit.           
                     </p>
                <div>
                <a href="#leistungen"  rel="noreferrer" className="movie-flip" data-back="Movie App" data-front="Leistungen"> </a>
                <a href="https://the-movie-app-2021.netlify.app/" target="_blank" rel="noreferrer" className="movie-flip1" data-back="Movie App" data-front="Kontakt"> </a>
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
                        <button 
                        className="btnShow"
                        onClick={showDivLeistung}>Raumausstatter</button>
                        
                        <div className="leistungOne"
                         style={{
                            height: showDiv ? "200px" : "0px",
                            opacity: showDiv ? "1" : "0",
                            backgroundColor: showDiv ? "rgba(123, 123, 123, 0.5)": "white"
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
                    <button 
                        className="btnShow"
                        onClick={showDivLeistung2}>Fliesenleger</button>
                        <div className="leistungOne"
                         style={{
                            height: showDiv2 ? "200px" : "0px",
                            opacity: showDiv2 ? "1" : "0",
                            backgroundColor: showDiv2 ? "rgba(123, 123, 123, 0.8)": "white"
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
                    <button 
                        className="btnShow"
                        onClick={showDivLeistung3}>Parkettleger</button>
                    <div className="leistungOne"
                         style={{
                            height: showDiv3 ? "200px" : "0px",
                            opacity: showDiv3 ? "1" : "0",
                            backgroundColor: showDiv3 ? "rgba(123, 123, 123, 0.7)": "white"
                        }}
                        >
                            <p
                             style={{
                                opacity: showDiv3 ? "1" : "0",
                                
                            }}
                            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, adipisci.</p>
                        </div>
                    </div>
                    <div>
                    <button 
                        className="btnShow"
                        onClick={showDivLeistung4}>Fenster,Türen...</button>
                    <div className="leistungOne"
                         style={{
                            height: showDiv4 ? "200px" : "0px",
                            opacity: showDiv4 ? "1" : "0",
                            backgroundColor: showDiv4 ? "rgba(123, 123, 123, 0.8)": "white"
                        }}
                        >
                            <p
                            style={{
                                opacity: showDiv4 ? "1" : "0",
                                
                            }}
                            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, adipisci.</p>
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