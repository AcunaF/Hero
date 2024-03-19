import React from "react";
import {Navigate, useParams} from "react-router-dom";
import {GetheroById} from "../helpers";

export const Hero = () => {
    const {id} = useParams();

    const heroId = GetheroById(id);

    if(!heroId){
        return <Navigate to={"/marvel"}/>

    }

console.log(heroId);
    return (
        <div>
            <h1>Hero</h1>
            <p>{heroId.superhero}</p>
            <p>{ }</p>
        </div>
    );
};