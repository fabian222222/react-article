const baseUrl  = "http://edu.project.etherial.fr/"

export const UserInfo = async () => {
    const response = await fetch(`${baseUrl}users/me`, {
        method: "POST",
        headers : {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    })
    const json = await response.json()
    return json
}

export default UserInfo
