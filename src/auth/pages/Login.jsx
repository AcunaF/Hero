import React from "react";
import {useNavigate} from "react-router-dom";

export const Login = () => {

    const navigate = useNavigate();

    const handleLogin = () => {
        navigate ('/',{
            replace: true
        })

        console.log('handleLogin');
    };


    return (
        <div className="container mt-5">
            <h1>    Login     </h1>
            <hr/>
            <button className="btn btn-primary"
            onClick ={handleLogin}
            >
                Login
            </button>

        </div>
    );
};