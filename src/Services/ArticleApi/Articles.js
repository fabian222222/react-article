const baseUrl  = "http://edu.project.etherial.fr/"

export const ArticlesApi = async (offset) => {
    const response = await fetch(`${baseUrl}articles?limit=10&offset=${offset}0`, {
        method : "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })

    const json = await response.json()
    return json
}
