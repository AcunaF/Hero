import { heroes } from "../data/heros";

export const getHeroByName =  (name = "") => {
    //que no halla espacios adelante ni atras
    name = name.toLocaleLowerCase().trim();

    if(name.length === 0) return [];

    return heroes.filter(
        hero => hero.superhero.toLocaleLowerCase().includes(name)
    )
};