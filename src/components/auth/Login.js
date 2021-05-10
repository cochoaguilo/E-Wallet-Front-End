import React, {useState, useEffect,useContext} from 'react';
import { Link} from 'react-router-dom';
import '../../assets/css/signin.css';

import AlertaContext from '../../components/alertas/alertaContext';
import AuthContext from '../../components/auth/context/authContext';

const Login = (props) =>{
    const alertaContext = useContext(AlertaContext);
    const { alerta, mostrarAlerta } = alertaContext;

    const authContext = useContext(AuthContext);
    const { mensaje, autenticado, iniciarSesion } = authContext;

    useEffect(() => {
        if(autenticado) {
            props.history.push('/E-Wallet-Front-End/home');
        }

        if(mensaje) {
            mostrarAlerta(mensaje.msg, mensaje.categoria);
        }
        // eslint-disable-next-line
    }, [mensaje, autenticado, props.history]);
    //Sae para ncar sesn
    const [user, saveUser ] = useState({
        email: '',
        password:''
    })

    const {email, password} = user

    const onChange = e =>{
        saveUser({
            ...user,
            [e.target.name]: e.target.value
        })
        
    }

    const onSubmit = e =>{
        e.preventDefault();

        // Validar que no haya campos vacios
        if(email.trim() === '' || password.trim() === '') {
            mostrarAlerta('Todos los campos son obligatorios', 'alerta-error');
            return
        }

        // Pasarlo al action
        iniciarSesion({ email, password});
    }
    return(
        
                <form
                    onSubmit ={onSubmit}        
                >
                 { alerta ? ( <div className={` ${alerta.categoria}`}> {alerta.msg} </div> )  : null }

                    <h1>Iniciar Sesión</h1>
                    <div className="form-floating mb-3">
                       
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Tu email"
                            className ="form-control"
                            value={email}
                            onChange={onChange}
                            />
                             <label htmlFor="email">Email</label>
                    </div>
                    <div className="form-floating mb-3">
                        
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Tu password"
                            className="form-control"
                            value={password}
                            onChange={onChange}
                            />
                            <label htmlFor="password">Password</label>
                    </div>

                    <div className="camp-form">
                        <input type="submit" className="btn btn-primary"
                        value="Iniciar Sesión" />
                        <Link to={'/E-Wallet-Front-End/new-account'} className="btn btn-secondary enlace-cuenta">
                    Obtener Cuenta
                </Link>
                    </div>
                </form>
                
           
        
    )
}

export default Login