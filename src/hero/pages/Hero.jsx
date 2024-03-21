import React, {useMemo} from "react";
import {Navigate, useNavigate, useParams} from "react-router-dom";
import {GetheroById} from "../helpers";

export const Hero = () => {
    const {id} = useParams();
    // useMemo dispara esta funcion cada vez que su dependencia cambien, en este caso el id
    const heroId = useMemo(() => GetheroById(id), [id]);
    const navigate = useNavigate();

    if(!heroId){
        return <Navigate to={"/marvel"}/>
    }
    const handleBack = () => {
        if (navigate) {
            navigate('/marvel');
        }
    }
console.log(heroId);
    return (
        <div className="row mt-5 animate__animated animate__fadeIn">
            <div className="col-4">
                <img src ={`/assets/heroes/${id}.jpg`}
                     alt={heroId.superhero}
                     className="img-thumbnail"/>
            </div>
         <div className="col-8">
                <h3>{heroId.superhero}</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><b>Alter ego: </b>{heroId.alter_ego}</li>
                    <li className="list-group-item"><b>Publisher: </b>{heroId.publisher}</li>
                    <li className="list-group-item"><b>First appearance: </b>{heroId.first_appearance}</li>
                </ul>
                <h5 className="mt-3">Characters</h5>
                <p>{heroId.characters}</p>
                <button
                    onClick={() => handleBack()}
                    className="btn btn-outline-secondary">
                    Back
                </button>
             </div>
        </div>
    );
};