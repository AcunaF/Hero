import {heroes} from "../data/heros.js";

export const GetheroById = (id) => {
    return heroes.find(hero => hero.id === id);

};