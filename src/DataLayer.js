import React, { createContext, useContext, useReducer } from "react";

export const DataLayerContext = createContext();
//children is what is inbetween the <DataLayer>
//so this will be App
export const DataLayer = ({initialState, reducer, children}) => (

    <DataLayerContext.Provider value={useReducer(initialState)}>
        {children}
    </DataLayerContext.Provider>

);

export const useDataLayerValue = () => useContext(DataLayerContext);