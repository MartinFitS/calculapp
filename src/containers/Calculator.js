import React, { useState } from "react";
import {Link} from "react-router-dom";
import { connect } from "react-redux"
import Rectangle from "../components/Rectangle";
import Circle from "../components/Circle";
import Triangule from "../components/Triangule";
import Square from "../components/Square";
import "../assets/styles/Calculator.css";

const Calculator = props => {
    let user = props.authenticateUser;
    let [formFormula, setValues] = useState(null);


    const handleSelect = event =>{
        setValues({
            ...formFormula,
            [event.target.name]: event.target.value,
            id:0
        });  
    }

    if(formFormula === null){
        formFormula = [];
    }

    const handleSubmit = event => {
        event.preventDefault();
    }
    return(
        <div className="main_calculators">
            <div className="header-bar_calculator">
                <div className="left-header__bar___calculator">
                    <Link style={{ textDecoration: 'none', color: 'white' }} to="/">
                        <h1>CalculApp</h1>
                    </Link>
                </div>

                <div className="menu-header__bar___calculator">
                    <ul>
                        {
                           user !== undefined ? <li>Bienvenido a CalculApp</li>:null  
                        }
                        {
                            user === undefined ? <Link style={{ textDecoration: 'none', color: 'white' }} to="/register"><li  className="left-li_calculator">Registrarse</li></Link> : null
                        }
                        
                        {
                            user === undefined ? <Link style={{ textDecoration: 'none', color: 'white' }} to="/login"><li>Iniciar Sesión</li></Link> : null
                        }
                        
                        
                    </ul>
                </div>
            </div>

            <div className="div-formulas">
                <div className="div-first__election">
                    <h1>Elige la figura:</h1>
                    <form onSubmit={handleSubmit} >
                        <select name="figure" className="input-select" onChange={handleSelect} >
                           <option hidden selected>Selecciona una opción</option>
                           <option value="0">Cuadrado</option>
                           <option value="1">Rectángulo</option>
                           <option value="2">Triángulo</option>
                           <option value="3">Círculo</option>
                        </select>
                    </form>
                </div>   
                
                {
                    formFormula.figure === "0" ? <Square/>  : null
                }
                {
                    formFormula.figure === "1" ? <Rectangle/>: null 
                }

                {
                      formFormula.figure === "2" ? <Triangule/>:null
                }

                {
                    formFormula.figure === "3" ? <Circle/>:null
                }
            </div>
           

        </div>
    )
};

const mapStateToProps = state => {
    return{
        authenticateUser: state.authenticateUser
    }
}

export default connect(mapStateToProps, null)(Calculator);