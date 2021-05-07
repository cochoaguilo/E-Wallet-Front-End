import React, {useState} from 'react';
import { Link} from 'react-router-dom'

import fetch from '../../fetch'

const NewUser = () =>{

    //Sae para ncar sesn
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

        if (name.trim() === '' ||
            surname.trim() === '' ||
            email.trim() === '' ||
            password.trim() === ''
        ) {
            alert('Faltan datos')
            return
        }
        if (password.length < 6) {
            alert('El password debe tener minimo 6 caracteres')
            return
        }

        fetch.apiFetchPOST('/operations', user)
    }
    return(
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Crear Neva Cuenta</h1>
                <form
                    onSubmit ={onSubmit}        
                >
                    <div className="campo-form">
                        <label htmlFor="name">Nmbre</label>
                        <input
                            type="ex"
                            id="name"
                            name="name"
                            placeholder="Tu nombre"
                            value={name}
                            onChange={onChange}
                            />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="surname">Apelld</label>
                        <input
                            type="text"
                            id="surname"
                            name="surname"
                            placeholder="Tu apellido"
                            value={surname}
                            onChange={onChange}
                            />
                    </div>

                
                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Tu email"
                            value={email}
                            onChange={onChange}
                            />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Tu password"
                            value={password}
                            onChange={onChange}
                            />
                    </div>

                    <div className="camp-frm">
                        <input type="submit" className="btn btn-prmar"
                        value="Crear Cuenta" />
                    </div>
                </form>
                <Link to={'/hme'} className="enlace-cuenta">
                    Obtener Cuenta
                </Link>
            </div>
        </div>
    )
}

export default NewUser