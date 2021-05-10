import React, {useState, useContext, useEffect} from 'react';
import { Link} from 'react-router-dom'
import '../../assets/css/signin.css'

import AlertaContext from '../../components/alertas/alertaContext';
import AuthContext from '../../components/auth/context/authContext';

const NewUser = (props) =>{

    const alertaContext = useContext(AlertaContext);
    const { alerta, mostrarAlerta } = alertaContext;

    const authContext = useContext(AuthContext);
    const { mensaje, autenticado, registrarUsuario } = authContext;

    useEffect(() => {
        if(autenticado) {
            props.history.push('/E-Wallet-Front-End/');
        }

        if(mensaje) {
            mostrarAlerta(mensaje.msg, mensaje.categoria);
        }
        // eslint-disable-next-line
    }, [mensaje, autenticado, props.history]);
    const [user, saveUser ] = useState({
        name:'',
        surname: '',
        email: '',
        password:''
    })

    const {name, surname, email, password} = user

    const onChange = e =>{
        saveUser({
            ...user,
            [e.target.name]: e.target.value
        })
        
    }

    const onSubmit = e =>{

        e.preventDefault()

        if (name.trim() === '' ||
            surname.trim() === '' ||
            email.trim() === '' ||
            password.trim() === ''
        ) {
            mostrarAlerta('Todos los campos son obligatorios', 'alerta-error');
            return
        }
        if (password.length < 6) {
            mostrarAlerta('Debe tener minimo 6 caracteres', 'alerta-error');
            return
        }
        
        registrarUsuario({user})
    }
    return(
        
                
                <form
                    onSubmit ={onSubmit}        
                >
                    { alerta ? ( <div className={` ${alerta.categoria}`}> {alerta.msg} </div> )  : null }
                    <h1>Crear Neva Cuenta</h1>
                    <div className="form-floating">
                        
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Tu nombre"
                            value={name}
                            onChange={onChange}
                            className="form-control"
                            />
                            <label htmlFor="name">Nombre</label>
                    </div>
                    <div className="form-floating">
                        
                        <input
                            type="text"
                            id="surname"
                            name="surname"
                            placeholder="Tu apellido"
                            value={surname}
                            onChange={onChange}
                            className="form-control"
                            />
                            <label htmlFor="surname">Apellido</label>
                    </div>

                
                    <div className="form-floating">
                       
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Tu email"
                            value={email}
                            onChange={onChange}
                            className="form-control"
                            />
                             <label htmlFor="email">Email</label>
                    </div>
                    <div className="form-floating">
                       
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Tu password"
                            value={password}
                            onChange={onChange}
                            className="form-control"
                            />
                             <label htmlFor="password">Password</label>
                    </div>

                    <div className="camp-form">
                        <input type="submit" className="btn btn-primary"
                        value="Crear Cuenta" />
                        <Link to={'/E-Wallet-Front-End/'} className="btn btn-secondary enlace-cuenta">
                    Log-in
                </Link>
                    </div>
                    
                </form>
                
    )
}

export default NewUser