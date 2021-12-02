import React, {useEffect, useState} from 'react'
import { ArticlesApi } from '../Services/ArticleApi/Articles'
import { ArticleSingle } from '../Components/ArticleSingle'

const Article = () => {

    const [articles, setArticles] = useState()

    const getArticles = async () => {
        const articles2 = await ArticlesApi()
        setArticles(articles2)
    }
    
    useEffect(() => {
        getArticles()
    }, [])

    if (articles) {
        return (
            <div>
                {articles.data.map((article) => {
                    return(
                        <ArticleSingle info={article}></ArticleSingle>
                    )
                })}
            </div>
        )
    } else {
        return (
            <div>
                <p>wait</p>
            </div>
        )
    }
}

export default Article
