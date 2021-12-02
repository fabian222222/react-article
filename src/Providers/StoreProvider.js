import React, {createContext, useState} from 'react'

export const StoreContext = createContext()

export const StoreProvider = (props) => {

    const [token, setToken] = useState('')

    return (
        <StoreContext.Provider value={{token, setToken}}>
            {props.children}
        </StoreContext.Provider>
    )
}