import React from "react";
import { Route, Routes} from "react-router-dom";
import {Login} from "../auth/pages/Login.jsx";
import {HeroRutes} from "../hero/index.js";

export const AppRouter = () => {
    return (
        <>
    <Routes>
        <Route path="/Login" element={<Login/>} />
        <Route path="/*" element={<HeroRutes />} />
    </Routes>
        </>
    );
};