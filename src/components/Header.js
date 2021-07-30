import React from "react";
import "../assets/styles/Header.css";
import {Link} from "react-router-dom";
import { connect } from "react-redux";


const Header = props => {
    let authenticateUser = props.authenticateUser !== undefined ? props.authenticateUser : [];

    return(
        <div className="header">
            <div className="header-bar">
                <div className="left-header__bar">
                    <h1>CalculApp</h1>
                </div>

                <div className="menu-header__bar">
                    <ul>
                        {
                            authenticateUser.authenticate !== true ?<Link style={{ textDecoration: 'none', color: 'white' }} to="/register"><li  className="left-li">Registrarse</li></Link>:null
                        }
                        {
                            authenticateUser.authenticate !== true ? <Link style={{ textDecoration: 'none', color: 'white' }} to="/login"><li>Iniciar Sesión</li></Link> : null
                        }
                        {
                            authenticateUser.authenticate === true ? <li>Bienvenido a CalculApp</li>: null
                        }
                     
                    </ul>
                </div>
            </div>

            <div className="middle-page">
                <h1 className="middle-page__title">Calculadoras para cualquier fórmula</h1>
                {
                    authenticateUser == 0 ? <Link to="/register"><button className="middle-page__button">Ir a verlas</button></Link>:null
                }

                {
                    authenticateUser != 0 ? <Link to="/calculators"><button className="middle-page__button">Ir a verlas</button></Link> : null
                }
                            
            </div>
            <div className="footer">
                <a href="https://github.com/MartinFitS" target="_blank" rel="noreferrer"><h1>Creator @MartinFitS</h1></a>
            </div>
        </div>
)};

const mapStateToProps = state => {
    return{
        authenticateUser: state.authenticateUser
    }
}


export default connect(mapStateToProps, null)(Header);