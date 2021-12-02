import React from 'react'
import { Navigate } from 'react-router-dom'

const PrivateRoute = (props) => {
        if (localStorage.getItem("token")) {
            return props.children
        } else {
            return <Navigate to="/login"></Navigate>
        }
}

export default PrivateRoute
