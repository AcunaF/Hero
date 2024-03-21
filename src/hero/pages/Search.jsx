import React from "react";
import {HeroCard} from "../components/index.js";
import {useForm} from "../../hooks/useForm.js";
import queryString from "query-string";
import {useLocation, useNavigate} from "react-router-dom";
import {getHeroByName} from "../helpers/index.js";

export const Search = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { q = '' } = queryString.parse(location.search);
    const heroes = getHeroByName(q);
    const showSearch = (q.length === 0);
    const showError = (q.length > 0) && (heroes.length === 0);
    const {searchText,onInputChange} = useForm({
        searchText: ""
    });

    function handleSubmit(e) {
        e.preventDefault();
        //validacion al menos 3 caracteres
        if(searchText.trim().length <= 2) {
            return;
        }
        //redireccionar a otra ruta
        navigate(`?q=${searchText}`);
        console.log({searchText});
    }

    return (
        <>
            <h1>Search</h1>
            <hr/>
            <div className="row">
                <div className="col-5">
                    <h4>Search Form</h4>
                    <hr/>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            placeholder="Find your hero"
                            className="form-control"
                            name="searchText"
                            autoComplete="off"
                            value ={searchText}
                            onChange={onInputChange}
                        />
                        <button
                            type="submit"
                            className="btn mt-2 btn-block btn-outline-primary"
                        >
                            Search
                        </button>
                    </form>
                </div>
                <div className="col-7">
                    <h4>Results</h4>
                    <hr/>
                    <div className="alert alert-info" style={{display: showSearch ? '' :' none '}}>
                        Search a hero
                    </div>
                    <div className="alert alert-danger" style={{display: showError ? '' :' none '}} >
                        There is no hero with that name<p>{q}</p>
                    </div>
                    {heroes.map(hero => (
                        <HeroCard key={hero.id} {...hero} />
                        ))
                    }
                </div>
            </div>

        </>
    );
};