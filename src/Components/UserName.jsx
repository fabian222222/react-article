import React, {useEffect, useState} from 'react'
import userInfo from './../Services/UserApi/UserInfo'

const UserName = () => {

    const [info, setInfo] = useState("")

    const user = async () => {
        const info = await userInfo()
        setInfo(info.data)
    }

    useEffect(() => {
        user()
    }, [])

    return (
        <div>
            <p>{info.firstname}, {info.lastname}</p>
        </div>
    )
}

export default UserName
