import React, {useContext, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {AuthContext} from "../context/index.js";

export const Login = () => {

    const { login } = useContext (AuthContext);
    const { logout } = useContext (AuthContext);
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));

    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem('user')));
    }, []);

    const navigate = useNavigate();

    const handleLogin = () => {
        login('Constanza Acuña');
        navigate ('/',{
            replace: true
        });
        console.log('el usuario', user, 'ha iniciado sesion');
    };
    const handleLogout = () => {
        logout(' ');
        navigate ('/',{
            replace: true
        });
        console.log('el usuario ', user, 'ha cerrado sesion');
    };

    return (
        <div className="container mt-5">
            <h1>    Login     </h1>
            <hr/>
            <button className="btn btn-primary"
                    onClick ={user ? handleLogout : handleLogin}
            >
                {user ? 'Logout' : 'Login'}
            </button>

        </div>
    );
};