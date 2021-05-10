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

            const respuesta = await clienteAxios.post('http://localhost:4700/users', datos);
            console.log(respuesta.data);

            dispatch({
                type: REGISTRO_EXITOSO,
                payload: respuesta.data
            });

            // Obtener el usuario
           // usuarioAutenticado();
        } catch (error) {
            // console.log(error.response.data.msg);
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

    // Retorna el usuario autenticado
   /* const usuarioAutenticado = async () => {
        const token = localStorage.getItem('token');
        if(token) {
            tokenAuth(token);
        }

        try {
            const respuesta = await clienteAxios.get('/api/auth');
            // console.log(respuesta);
            dispatch({
                type: OBTENER_USUARIO,
                payload: respuesta.data.usuario
            });

        } catch (error) {
            console.log(error.response);
            dispatch({
                type: LOGIN_ERROR
            })
        }
    }*/

    // Cuando el usuario inicia sesión
    const iniciarSesion = async datos => {
        try {
            const respuesta = await clienteAxios.post('http://localhost:4700/users/login', datos);
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
