import React from "react";
import {Navbar} from "../../ui/index.js";
import {Navigate, Route, Routes} from "react-router-dom";
import {DcPages, Marvel,Hero,Search} from "../pages/index.jsx";

export const HeroRutes = () => {
    return (
        <>
            <Navbar/>
            <div className="container mt-2">
                <Routes>
                    <Route path="/" element={<Navigate to="/marvel"/>}/>
                    <Route path="/marvel" element={<Marvel/>}/>
                    <Route path="/dc" element={<DcPages/>}/>
                    <Route path="/search" element={<Search/>}/>
                    <Route path="/hero/:id" element={<Hero/>}/>
                </Routes>
            </div>
        </>
    );
};