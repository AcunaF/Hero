import React from "react";
import { HeroList } from "../components/HeroList.jsx";

export const Marvel = () => {
    return (
        <div>
        <h1>Marvel</h1>
        <hr/>
        <HeroList publisher="Marvel Comics"/>
        </div>
    );
};