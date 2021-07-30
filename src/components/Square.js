import React, {useState} from "react";
import square from "../assets/img/cuadrado.png"

const Square = () => {
    let [sideSquare ,setSide] = useState(null);
    


    const handleSide = event => {
        setSide({
            ...sideSquare,
            [event.target.name] : event.target.value || null,
            id:0
        })
    }

    if(sideSquare === null){
        sideSquare = [];

    }

    let side = parseFloat(sideSquare.side);

    

    const formulaSquare = (number)=> {
        return number*number
    }

    return(
        <div className="formula-div">
            <h1>Medidas del Cuadrado</h1>
            <div className="div-form__formula">
                <form>
                    <div className="box-inputs">
                        <h2>Lado: </h2>
                        <input 
                            type="number" 
                            placeholder="Esperando Lado"
                            onChange={handleSide}   
                            name="side"  
                            min="0"
                            onkeydown="return event.keyCode !== 69"
                            >
                        </input>
                    </div>         
                </form>
                <div className="result-div">
                    {isNaN(formulaSquare(side)) ? null : <h1 className="reult-formula_">El área del cuadrado es de: <span className="resultFormula">{formulaSquare(side)}cm</span></h1> }
                    <div className="square-img"><img alt="cuadrado-img" src={square}></img><span>Cuadrado</span></div>
                </div> 
            </div>
        </div>
    )
}

export default Square;