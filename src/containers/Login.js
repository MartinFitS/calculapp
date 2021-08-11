import React, {useState} from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { login, authenticateUser } from "../actions"
import "../assets/styles/Login.css";
import Swal from "sweetalert2";

const Login = props => {
    const userNew = props.user !== undefined ? props.user : [];

    const [confirmationUser , setUser ] = useState(null);

    const handleInput = event => {
  
            setUser(
                {
                    ...confirmationUser,
                    [event.target.name] : event.target.value,
                    authenticate : true,
                }
            )
        
       
    }

    const confirmationUserNotNull = confirmationUser !== null ? confirmationUser : [];
    const loginSuccesfully = userNew.email === confirmationUserNotNull.confirmationUser && userNew.password === confirmationUserNotNull.confirmationPassword ? true : false;

    const handleSubmit = event => {
        if(loginSuccesfully){
            event.preventDefault();
            Swal.fire({
                icon: 'success',
                title: 'Bienvenido a CALCulator',
                text: 'Has sido logueado exitosamente',
                confirmButtonText:"Aceptar",
                confirmButtonColor: '#307543'
            })
            props.history.push("/");
            props.login(loginSuccesfully);
            props.authenticateUser(confirmationUserNotNull);
        }else{
            event.preventDefault();
            Swal.fire({
                title:"Lo sentimos",
                text:"El usuario y/o contraseña son incorrectos",
                icon:"error",
                confirmButtonText:"Aceptar",
                confirmButtonColor: '#307543'
            })
            props.history.push("/register");
        }
    }
 

    return(
        <div className="main-login">
            <div className="title-register__login">
                <Link  style={{ textDecoration: 'none', color: 'white' }} to="/">
                     <h1>CalculApp</h1>
                </Link>
            </div>
        
            <div className="register-form__login">
                <h1>Inicia Sesión</h1>
                <form className="register-container__form___login" onSubmit={handleSubmit}>
                     <input 
                      className="input_login" 
                      type="email" 
                      placeholder="Email"
                      onChange={handleInput}
                      name="confirmationUser"
                      />
                     <input 
                      className="input_login" 
                      type="password" 
                      placeholder="Contaseña"
                      onChange={handleInput}
                      name="confirmationPassword"
                     />
                     <button className="button_login">Iniciar Sesión</button>
                </form>
                <p>si no tienes cuenta</p><Link  style={{ textDecoration: 'none', color: 'white' }} to="/register"><span>Registrarse</span></Link>
            </div>
 
        </div>
     )
}

const mapStateToProps = state => {
    return{
        user: state.user
    }
}


const mapDispatchToProps = {
    login,
    authenticateUser,
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);