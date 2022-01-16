import React, {createContext, useState, useEffect} from 'react'
import { io } from "socket.io-client"
import {ArticlesApi} from "./../Services/ArticleApi/Articles"

export const StoreContext = createContext()

export const StoreProvider = (props) => {

    const [token, setToken] = useState('')
    const [positions, setPositions] = useState([])
    const [articles, setArticles] = useState([])
    const [offset, setOffset] = useState(0)

    const getArticles = async () => {
        const getter = await ArticlesApi(offset)
        setArticles(getter)
    }

    useEffect(() => {
        getArticles()
    }, [offset])

    useEffect(() => {
        
        console.log(token);

        const ENDPOINT = "http://edu.project.etherial.fr/"
        const socket = io(ENDPOINT)
        
        socket.emit("auth", localStorage.getItem('token'));
        
        socket.on("positions", (positions) => {
            setPositions(positions)
        })
        
        if ("geolocation" in navigator) {
            navigator.permissions.query({name :"geolocation"}).then((result)=> {
                if (result.state === "granted" || result.state === "prompt"){
                    navigator.geolocation.watchPosition((position)=>{
                        socket.emit("update_position", {"point_lat":position.coords.latitude, "point_lon": position.coords.longitude})
                    })
                }
            })
        }
    }, [token])

    return (
        <StoreContext.Provider value={{token, setToken, positions, articles, setOffset}}>
            {props.children}
        </StoreContext.Provider>
    )
}