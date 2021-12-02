const baseUrl  = "http://edu.project.etherial.fr/"

export const RegisterApi = async({firstname, lastname, email, password, password_verif}) => {
    const response = await fetch(`${baseUrl}users`, {
        method:'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            firstname:firstname,
            lastname:lastname,
            email:email,
            password:password,
            password_verif:password_verif,
        })
    })

    const json = await response.json()
    console.log(json);
    return json
}