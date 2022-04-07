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
            
            
          
             <Parallax  className="parallax" bgImage="/img/img6.jpg"  strength={400}>
             <div id="title" className="zeroDiv">
             <h1 >Ihr Handwerker</h1>
            
             </div >
            </Parallax>
            
             <Parallax  className="parallax1" bgImage="/img/img7.jpg"  strength={400}>
             
             <div className="divFirstImg">
                 
                <h2>Ihr Wunsch ist unsere Leidenschaft</h2>

                <p>Wir sind ein Unternehmen, das mit voller Hingabe die Wünsche der Kunden erfüllt.
                    Unser Können und jahrelange Erfahrung hat stets unter Beweis gestellt, was alles möglich ist,
                    mit Facharbeitern und professionellen Arbeitsgeräte schaffen wir jede Renovierungsarbeit.           
                </p>
                <div>
                <a href="#leistungen"  rel="noreferrer" className="movie-flip" data-back="Leistungen" data-front="Leistungen"> </a>
                <a href="#footer"  rel="noreferrer" className="movie-flip1" data-back="Kontakt" data-front="Kontakt"> </a>
                </div>
            </div>
    </Parallax>

   
             <Parallax className="parallax2" bgImage="/img/img2.jpg"  strength={400}>
             <div id="leistungen">
             <div 
             
             className="divSecondImg">
                <h2>Unsere leistungen</h2>
                <div 
                
                className="leistungen"
               
                >
                    <div>
                        
                         <a onClick={showDivLeistung} rel="noreferrer" href="#Raumausstattung" className="movie-flip" data-back="Raumausstattung" data-front="Raumausstattung"> </a>
                        
                        <div className="leistungOneRaumausstatter"
                         style={{
                            height: showDiv ? "300px" : "0px",
                            opacity: showDiv ? "1" : "0",
                         
                        }}
                        >
                       
                        </div>
                    </div>
                    <div>
                        
                         <a onClick={showDivLeistung5} rel="noreferrer" href="#Tapeten" className="movie-flip" data-back="Tapeten" data-front="Tapeten"> </a>
                        
                        <div className="leistungOneTapeten"
                         style={{
                            height: showDiv5 ? "300px" : "0px",
                            opacity: showDiv5 ? "1" : "0",
                           
                        }}
                        >
                           
                        </div>
                    </div>
                    <div>
                  
                        <a onClick={showDivLeistung2} href="#Fliesen" rel="noreferrer" className="movie-flip" data-back="Fliesen" data-front="Fliesen"> </a>
                        <div className="leistungOneFliesenleger"
                         style={{
                            height: showDiv2 ? "300px" : "0px",
                            opacity: showDiv2 ? "1" : "0",
                            backgroundColor: showDiv2 ? "rgba(123, 123, 123, 0.8)": "white"
                        }}
                        >
                          
                        </div>
                    </div>
                    <div>
                 
                        <a onClick={showDivLeistung3} href="#Parkett" rel="noreferrer" className="movie-flip" data-back="Parkett" data-front="Parkett"> </a>
                    <div className="leistungOneParkettleger"
                         style={{
                            height: showDiv3 ? "300px" : "0px",
                            opacity: showDiv3 ? "1" : "0",
                            backgroundColor: showDiv3 ? "rgba(123, 123, 123, 0.7)": "white"
                        }}
                        >
                            
                        </div>
                    </div>
                    <div>
              
                        <a onClick={showDivLeistung4} href="#Fenster,Türen" rel="noreferrer" className="movie-flip" data-back="Fenster,Türen" data-front="Fenster,Türen"> </a>
                    <div className="leistungOneFenster"
                         style={{
                            height: showDiv4 ? "300px" : "0px",
                            opacity: showDiv4 ? "1" : "0",
                            backgroundColor: showDiv4 ? "rgba(123, 123, 123, 0.8)": "white"
                        }}
                        >
                         
                        </div>
                    </div>
                   
                </div>
                <div>
              
                </div>
               
            </div>
            </div>
    </Parallax>

    
        </section>
    )
}

export default SectionMain