import {createContext} from "react";

export const AuthContext = createContext({
    login: () => {

    },
    logout: () => {},

});
/*¿Qué es Context?
Context en React es una herramienta para compartir datos entre varios componentes sin necesidad de pasar props
 manualmente a través de cada nivel del árbol de componentes.
 Es ideal para datos que necesitan estar accesibles globalmente, como la información de usuario autenticado.

¿Qué es Reducer?
Reducer es una función que toma el estado actual y una acción, y retorna un nuevo estado.
Se utiliza junto con useReducer en React para manejar estados complejos de manera más predecible.*/


/*Puedes usar el AuthProvider para envolver tu aplicación y luego usar useAuth en cualquier componente para acceder o modificar el estado de autenticación*/