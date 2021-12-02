const baseUrl  = "http://edu.project.etherial.fr/"

const UpdateUser = async (update) => {
    const response = await fetch(`${baseUrl}users/me`, {
        method:"PUT",
        headers : {
            "Content-Type": "application/json",
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }, 
        body: JSON.stringify({
            update
        })
    })

    const json = await response.json()
    console.log(json);
    return json
}

export default UpdateUser
