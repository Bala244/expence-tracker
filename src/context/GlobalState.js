import React, { createContext, useContext, useReducer, useEffect, useState } from "react";
import AppReducer from './AppReducer';

import 'firebase/firestore';
import app from '../Firebase';
//innitial state
const InitialState = {
    transations: []
}

//Create context
export const GlobalContext = createContext(InitialState);

//provider Component
export const GlobalProvider = ({ children }) => {
    const db = app.firestore();

    const { transations } = useContext(GlobalContext);

    const [state, dispatch] = useReducer(AppReducer, InitialState);
    
    useEffect(() => {
        db.collection("expenseHistory").get().then((querySnapShot) => querySnapShot.docs.map(doc => InitialState.transations.push(doc.data())))
            .catch((err) => console.log(err))
    },[InitialState])
    
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