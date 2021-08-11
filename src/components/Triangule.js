import React , {useState} from "react";
import triangulo from "../assets/img/triangulo.png"
const Triangule = () => {
    let [baseTriangule ,setBase] = useState(null);
    let [heightTriangule, setHeight] = useState(null);


    const handleBase = event => {
        setBase({
            ...baseTriangule,
            [event.target.name] : event.target.value || null,
            id:0
        })
    }
    const handleHeight = event => {
        setHeight({
            ...heightTriangule,
            [event.target.name] : event.target.value || null,
            id:0
        })
    }

    if(baseTriangule === null || heightTriangule === null){
        baseTriangule = [];
        heightTriangule = [];
    }

    let base = parseFloat(baseTriangule.base);
    let height = parseFloat(heightTriangule.height);
    

    const formulaTriangule = (numberOne , numberTwo)=> {
        return (numberOne * numberTwo)/2;
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
                            placeholder="Esperando Base"
                            onChange={handleBase}   
                            name="base"  
                            min="0"
                            >
                        </input>
                    </div>
                    <div className="box-inputs">
                        <h2>Ancho: </h2>
                        <input 
                            type="number" 
                            placeholder="Esperando Altura"
                            onChange={handleHeight}
                            name="height"
                            min="0"
                            >     
                        </input>
                    </div>                 
                </form>
                <div className="result-div">
                    {isNaN(formulaTriangule(base,height)) ?null:<h1 className="reult-formula_">El área del triángulo es de: <span className="resultFormula">{formulaTriangule(base,height)}cm</span></h1> }
                    <div className="square-img"><img alt="triangulo-img" src={triangulo}></img><span>Triangulo</span></div>
                </div>
                
            </div>
        </div>
    )
};

export default Triangule;