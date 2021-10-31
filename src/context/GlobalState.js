import React, { createContext, useReducer } from "react";
import AppReducer from './AppReducer';

//innitial state
const InitialState = {
    transations: [
        
    ]
}

//Create context
export const GlobalContext = createContext(InitialState);

//provider Component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, InitialState);
    
    //Action Add
    function addNewTransation(transation){
        dispatch({
            type:'ADD_TRANSATION',
            payload:transation
        });
    }

    //Action Delete
    function deleteTransation(id){
        dispatch({
            type:'DELETE_TRANSATION',
            payload:id
        });
    }

    return (
    <GlobalContext.Provider value={{
            transations: state.transations,
            deleteTransation,
            addNewTransation
        }}>
        {children}
    </GlobalContext.Provider>);
}