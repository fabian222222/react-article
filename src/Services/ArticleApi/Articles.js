const baseUrl  = "http://edu.project.etherial.fr/"

export const ArticlesApi = async () => {
    const response = await fetch(`${baseUrl}articles`, {
        method : "GET",
        headers: {
            "Content-type": "application/json"
        }
    })

    const json = await response.json()
    console.log(json);
    return json
}
