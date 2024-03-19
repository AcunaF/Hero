import React from 'react';
import {getHerosByPublisher} from "../helpers";
import {HeroCard} from "./HeroCard.jsx";

export const HeroList = ({publisher}) => {

    const Hero = getHerosByPublisher(  publisher  );
    return (
            <div className="row rows-cols-1 row-cols-md-3 g-3">
                {
                    Hero.map(hero => (
                            <HeroCard
                                key ={hero.id}
                                {...hero}/>
                    ))
                }
            </div>
    );
};