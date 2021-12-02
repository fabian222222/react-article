import React, {useEffect, useState} from 'react'
import { useForm } from 'react-hook-form'
import UpdateApi from './../Services/UserApi/UpdateUser'
import {UserInfo} from './../Services/UserApi/UserInfo'

const UserUpdate = () => {

    const {register, handleSubmit} = useForm()

    const [user, setUser] = useState("")

    const getUserInfo = async () => {
        const userApi = await UserInfo()
        setUser(userApi.data)
    }

    useEffect(() => {
        getUserInfo()
    }, [])

    return (
        <form onSubmit={handleSubmit(async(form) => {
            if (form.firstname.length > 0 && form.lastname.length > 0){
                await UpdateApi(form)
            } else if (form.firstname.length > 0 && form.lastname.length === 0){
                const change = {
                    "firstname" : form.firstname
                }
                await UpdateApi(change)
            } else if (form.firstname.length === 0 && form.lastname.length > 0){
                const change = {
                    "lastname" : form.lastname
                }
                await UpdateApi(change)
            }
        })}>

            <label htmlFor="firstname">firstname : </label>
            <input type="text" id="firstname" placeholder={user.firstname} {...register("firstname", {
                minLength : 4
            })}/>

            <br />

            <label htmlFor="lastname">lastname : </label>
            <input type="text" id="lastname" placeholder={user.lastname} {...register("lastname", {
                minLength : 4
            })}/>

            <br />

            <input type="submit" value='update my info' />

        </form>
    )
}

export default UserUpdate
