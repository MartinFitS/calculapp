import React, { useState } from "react";

const Circle = () => {
    const pi = 3.14;
    let [radioCircle ,setRadio] = useState(null);
    


    const handleRadio = event => {
        setRadio({
            ...radioCircle,
            [event.target.name] : event.target.value || null,
            id:0
        })
    }

    if(radioCircle === null){
        radioCircle = [];

    }

    let radio = parseFloat(radioCircle.radio);

    

    const formulaCircle = (numberOne , pi)=> {
        return pi*(numberOne*numberOne)
    }

    return(
        <div className="formula-div">
            <h1>Medidas del Rectángulo</h1>
            <div className="div-form__formula">
                <form>
                    <div className="box-inputs">
                        <h2>Radio: </h2>
                        <input 
                            type="number" 
                            placeholder="Esperando Radio"
                            onChange={handleRadio}   
                            name="radio"  
                            min="0"
                            >
                        </input>
                    </div>         
                </form>
                {isNaN(formulaCircle(radio,pi)) ?null:<h1 className="reult-formula_">El área del círculo es de: <span className="resultFormula">{formulaCircle(radio,pi)}cm</span></h1> }
            </div>
        </div>
    )
}

export default Circle;