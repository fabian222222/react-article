import React from 'react'
import { useForm } from 'react-hook-form'
import { RegisterApi } from '../Services/UserApi/RegisterApi'

export default function RegisterPage() {

    const { register, handleSubmit, watch } = useForm()

    return (
        <form onSubmit={handleSubmit(async(form) => {
            await RegisterApi(form)
        })}>
            <label htmlFor="firstname">firstname : </label>
            <input id="firstname" type="text" {...register("firstname", {
                minLength : 3,
                required : true
            }) } />
            <br />
            <label htmlFor="lastname">Lastname : </label>
            <input id='Lastname' type="text" {...register("lastname", {
                required : true, 
                minLength : 3
            })} />
            <br />
            <label htmlFor="email">Email : </label>
            <input id='email' type="text" {...register("email", {
                required : true,
            })} />
            <br />
            <label htmlFor="password">Password : </label>
            <input id="password" type="password" {...register("password", {
                required : true,
                minLength : 8
            })} />
            <br />
            <label htmlFor="password_verif">Password verif : </label>
            <input id='password_veri' name="password" type="password" {...register("password_verif", {
                required : true,
                validate : value => value === watch("password") || "The passwords do not match"
            })}/>
            <input type="submit" value="Create account"/>
        </form>
    )
}