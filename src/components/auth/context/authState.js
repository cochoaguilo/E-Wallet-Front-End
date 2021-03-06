import React, { useReducer } from 'react';
import AuthContext from './authContext';
import AuthReducer from './authReducer';

import clienteAxios from 'axios';



import { 
    REGISTRO_EXITOSO,
    REGISTRO_ERROR,
    LOGIN_EXITOSO,
    LOGIN_ERROR,
    CERRAR_SESION
} from '../../types';

const AuthState = props => {

    let BASE_URL = process.env.REACT_APP_BACKEND;

    const initialState = {
        token: localStorage.getItem('token'),
        autenticado: null,
        usuario: null, 
        mensaje: null, 
        cargando: true
    }

    const [ state, dispatch ] = useReducer(AuthReducer, initialState);

    const registrarUsuario = async datos => {
        try {

            const respuesta = await clienteAxios.post(BASE_URL + 'users', datos);
            console.log(respuesta.data);

            dispatch({
                type: REGISTRO_EXITOSO,
                payload: respuesta.data
            });

            // Obtener el usuario
           // usuarioAutenticado();
        } catch (error) {
           
            const alerta = {
                msg: error.response.data.msj,
                categoria: 'alerta-error'
            }

            dispatch({
                type: REGISTRO_ERROR,
                payload: alerta
            })
        }
    }

   

    // Cuando el usuario inicia sesión
    const iniciarSesion = async datos => {
        try {
            const respuesta = await clienteAxios.post(BASE_URL + 'users/login', datos);
            console.log(respuesta.data);

            if (respuesta.data === "usuario incorrecto") {
                const alerta = {
                    msg: respuesta.data.msj,
                    categoria: 'alerta-error'
                }
    
                dispatch({
                    type: LOGIN_ERROR,
                    payload: alerta
                })

                return
            }

            dispatch({
                type: LOGIN_EXITOSO,
                payload: respuesta.data
            });
            
            // Obtener el usuario
            //usuarioAutenticado();
        } catch (error) {
            console.log(error);
            const alerta = {
                msg: error,
                categoria: 'alerta-error'
            }

            dispatch({
                type: LOGIN_ERROR,
                payload: alerta
            })
        }
    }

    // Cierra la sesión del usuario
    const cerrarSesion = () => {
        dispatch({
            type: CERRAR_SESION
        })
    }

    return(
        <AuthContext.Provider
            value={{
                token: state.token,
                autenticado: state.autenticado,
                usuario: state.usuario,
                mensaje: state.mensaje,
                cargando: state.cargando,
                registrarUsuario,
                iniciarSesion,
               
                cerrarSesion
            }}
        >{props.children}

        </AuthContext.Provider>
    )
}
export default AuthState;
