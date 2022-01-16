import React, {useContext} from 'react'
import {NavLink} from 'react-router-dom' 
import {StoreContext} from './../Providers/StoreProvider'

const Header = () => {
    const {token, setToken} = useContext(StoreContext)
    if(token.length > 0 || localStorage.getItem('token')){
        return (
            <div style={{padding:"10px 25px", background:"#548CFF"}}>
                <NavLink style={{textDecoration:"none", color:"white", marginRight:"15px"}} to="/me">My information</NavLink>
                <NavLink style={{textDecoration:"none", color:"white", marginRight:"15px"}} to="/articles">Articles</NavLink>
                <NavLink style={{textDecoration:"none", color:"white", marginRight:"15px"}} to="/articles/create">Create article</NavLink>
                <button style={{bakcground:"#548CFF",textDecoration:"none", color:"white", marginRight:"15px"}} onClick={()=>{
                    localStorage.removeItem("token")
                    setToken("")
                    }}>Disconnect</button>
            </div>
        )
    } else {
        return (
            <div style={{padding:"10px 25px", background:"#548CFF"}}>
                <NavLink style={{textDecoration:"none", color:"white", marginRight:"15px"}} to="/login">Login</NavLink>
                <NavLink style={{textDecoration:"none", color:"white", marginRight:"15px"}} to="/register">Register</NavLink>
            </div>
        )
    }
}

export default Header
