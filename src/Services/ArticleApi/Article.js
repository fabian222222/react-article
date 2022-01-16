const baseUrl  = "http://edu.project.etherial.fr/"

export const Article = async (id) => {
    const response = await fetch(`${baseUrl}articles/${id}`, {
        method : "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })

    const json = await response.json()
    console.log(json);
    return json
}

