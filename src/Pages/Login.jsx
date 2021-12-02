import React from 'react'
import { useForm } from "react-hook-form"
import { LoginApi } from "./../Services/UserApi/Connection"

const Login = () => {

    const {register, handleSubmit} = useForm()

    return (
        <form onSubmit={handleSubmit(async(form) =>{
            const response = await LoginApi(form)
            if(response.status === 200){
                localStorage.setItem('token', response.data.token)
            }
        })}>
            <label htmlFor="email">Email : </label>
            <input id='email' type="text" {...register("email", {
                required : true
            })} />
            <br />
            <label htmlFor="password">Password : </label>
            <input id='password' type="text" {...register('password' , {
                required : true,
                minLength : 8
            })}/>
            <input type="submit" value="login"/>
        </form>
    )
}

export default Login
