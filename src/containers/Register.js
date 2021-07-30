import React, {useState} from "react";
import { Link } from "react-router-dom";
import "../assets/styles/Register.css";
import { connect } from "react-redux";
import { createUser } from "../actions";


const Register = props => {
    let id = 0;
    const [user, setUser] = useState(null);


    const handleInput = event => {
        setUser({
            ...user,
            [event.target.name] : event.target.value,
            id : id !== 0 ? id = id + 1 : id = 0 
        })
    }


    const handleSubmit = event => {
        event.preventDefault();
        props.createUser(user);
        props.history.push("/login")
    }

    return(
       <div className="main">
           <div className="title-register">
               <Link  style={{ textDecoration: 'none', color: 'white' }} to="/">
                    <h1>CalculApp</h1>
               </Link>
           </div>

           <div className="register-form">
               <h1>Registrate</h1>
               <form className="register-container__form" onSubmit={handleSubmit}>
                    <input 
                    className="input" 
                    type="text" 
                    placeholder="Nombre"
                    name="name"
                    onChange={handleInput}
                    required
                    />
                    <input
                    className="input" 
                    type="email" 
                    placeholder="Correo"
                    name="email"
                    onChange={handleInput}
                    required
                    />
                    <input 
                    className="input" 
                    type="password" 
                    placeholder="Contaseña"
                    name="password"
                    onChange={handleInput}
                    required
                    />
                    <button className="button">Registrarme</button>
               </form>
               <p>Si ya tienes cuenta</p><Link  style={{ textDecoration: 'none', color: 'white' }} to="/login"><span>Iniciar Sesión</span></Link>
           </div>

       </div>
    )
}

const mapDispatchToProps = {
    createUser,
}

export default connect(null , mapDispatchToProps)(Register);