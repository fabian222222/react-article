const baseUrl  = "http://edu.project.etherial.fr/"

export const LoginApi = async({email, password}) => {

    const response = await fetch(`${baseUrl}auth`, {
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        }, 
        body: JSON.stringify({
            email: email, 
            password : password
        })
    })

    const json = await response.json()
    return json
}