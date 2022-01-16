const baseUrl = "http://edu.project.etherial.fr/"
export const Categories = async () => {
    const response = await fetch(`${baseUrl}articles/categories`, {
        method : "GET", 
        headers: {
            'Content-Type':'application/json'
        }
    })

    const json = await response.json()
    return json
}