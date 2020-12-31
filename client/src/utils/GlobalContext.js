import  { createContext, useContext, useReducer } from 'react';

export const GlobalContext = createContext();

const GlobalProvider = (props) => {
    return (
        <GlobalContext.Provider value={{ a: 'Hello', b: 'World'}} {...props} />
    )
};

export default GlobalProvider;

export const useGlobalContext = () => {
    return useContext(GlobalContext);
}