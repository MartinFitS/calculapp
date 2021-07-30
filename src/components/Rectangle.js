import React, { useState } from "react";
import rectangle from "../assets/img/rectangulo.png"
import "../assets/styles/Formulas.css";

const Rectangle = () => {
    let [largeRectangle ,setLarge] = useState(null);
    let [widthRectangle, setWidth] = useState(null);


    const handleLarge = event => {
        setLarge({
            ...largeRectangle,
            [event.target.name] : event.target.value || null,
            id:0
        })
    }
    const handleWidth = event => {
        setWidth({
            ...widthRectangle,
            [event.target.name] : event.target.value || null,
            id:0
        })
    }

    if(largeRectangle === null || widthRectangle === null){
        largeRectangle = [];
        widthRectangle = [];
    }

    let large = parseFloat(largeRectangle.large);
    let width = parseFloat(widthRectangle.width);
    

    const formulaRectangule = (numberOne , numberTwo)=> {
        return numberOne * numberTwo;
    }

    return(
        <div className="formula-div">
            <h1>Medidas del Rectángulo</h1>
            <div className="div-form__formula">
                <form>
                    <div className="box-inputs">
                        <h2>Largo: </h2>
                        <input 
                            type="number" 
                            placeholder="Esperando Largo"
                            onChange={handleLarge}   
                            name="large"  
                            min="0"
                            >
                        </input>
                    </div>
                    <div className="box-inputs">
                        <h2>Ancho: </h2>
                        <input 
                            type="number" 
                            placeholder="Esperando Ancho"
                            onChange={handleWidth}
                            name="width"
                            min="0"
                            >     
                        </input>
                    </div>                 
                </form>
                <div className="result-div">
                    {isNaN(formulaRectangule(large,width)) ?null:<h1 className="reult-formula_">El área del rectangulo es de: <span className="resultFormula">{formulaRectangule(large,width)}cm</span></h1> }
                    <div className="square-img"><img alt="cuadrado-img" src={rectangle}></img><span>Rectangulo</span></div>
                </div>
            </div>
        </div>
    )
};

export default Rectangle;