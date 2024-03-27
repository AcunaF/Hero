import React from "react";
import {Route, Routes} from "react-router-dom";
import {Login} from "../auth/pages/Login.jsx";
import {HeroRutes} from "../hero/index.js";
import {PrivateRoute} from "./PrivateRoute.jsx";
import {PublicRoute} from "./PublicRoute.jsx";

export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/Login" element={
                    <PublicRoute>
                        <Login/>
                    </PublicRoute>
                }/>

                <Route path="/*" element={
                    <PrivateRoute>
                        <HeroRutes/>
                    </PrivateRoute>
                }/>
            </Routes>
        </>
    );
};