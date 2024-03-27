import React, {useContext} from 'react'
import {AuthContext} from "../auth/index.js";
import {Navigate} from "react-router-dom";

export const PublicRoute = ({children}) => {
    //use context tengo el usuario autenticado
    const { logged } = useContext(AuthContext)
    return (
        //si esta autenticado muestra los hijos si no saca al usuario
        (!logged) ? children : <Navigate to="/marvel" />
    )
}
