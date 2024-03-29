import {useReducer} from 'react';
import {AuthContext} from "./AuthContext.jsx";
import {authReducer} from "./authReducer.js";
import {types} from "../types/types.js";
import {useNavigate} from "react-router-dom";

const init = () =>  {
    const user = JSON.parse(localStorage.getItem('user')) || {isLogged: false};
    return{
        logged: !!user,
        user : user,
    }
}

export const AuthProvider = ({children}) => {
    const navigate = useNavigate();

    const [ authState, dispatch ]= useReducer( authReducer, { }, init);

    const login =(name = " ") => {

        const user ={
            id: 'abc',
            name: name
        }
        const action = {
            type : types.login,
            payload: user
        }
        localStorage.setItem('user', JSON.stringify(user));
        dispatch(action);
        navigate("/login");
    }
    const logout =() =>{
        const action = {
            type: types.logout
        }
        localStorage.removeItem('user');
        dispatch(action);
        navigate("/login");
    }

    return (
        <AuthContext.Provider  value={{
            ...authState,
            login,
            user: authState.user,
            logout,
        }}>
            { children }
        </AuthContext.Provider>
    )
}