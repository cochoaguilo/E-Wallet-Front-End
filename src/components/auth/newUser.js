import React, {useState} from 'react';
import { Link} from 'react-router-dom'
import '../../assets/css/signin.css'


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
        <div className="text-center">
        <main className="form-signin">
            
                
                <form
                    onSubmit ={onSubmit}        
                >
                    <h1>Crear Neva Cuenta</h1>
                    <div className="form-floating">
                        
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Tu nombre"
                            value={name}
                            onChange={onChange}
                            className="form-floating"
                            />
                            <label htmlFor="name">Nmbre</label>
                    </div>
                    <div className="form-floating">
                        
                        <input
                            type="text"
                            id="surname"
                            name="surname"
                            placeholder="Tu apellido"
                            value={surname}
                            onChange={onChange}
                            className="form-floating"
                            />
                            <label htmlFor="surname">Apelld</label>
                    </div>

                
                    <div className="form-floating">
                       
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Tu email"
                            value={email}
                            onChange={onChange}
                            className="form-floating"
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
                            className="form-floating"
                            />
                             <label htmlFor="password">Password</label>
                    </div>

                    <div className="camp-form">
                        <input type="submit" className="btn btn-primary"
                        value="Crear Cuenta" />
                    </div>
                </form>
                <Link to={'/E-Wallet-Front-End/'} className="enlace-cuenta">
                    Log-in
                </Link>
           
        </main>
        </div>
    )
}

export default NewUser