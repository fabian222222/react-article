const baseUrl  = "http://edu.project.etherial.fr/"

export const ArticleCreate = async ({title, content, article_category_id}) => {
    const response = await fetch(`${baseUrl}articles`, {
        method : "POST",
        headers: {
            "Content-Type": "application/json",
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body:JSON.stringify({
            title: title, 
            content : content,
            article_category_id : article_category_id
        })
    })

    const json = await response.json()
    return json
}

