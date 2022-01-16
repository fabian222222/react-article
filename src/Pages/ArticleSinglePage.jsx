import React, {useEffect, useState} from 'react'

import {Article} from '../Services/ArticleApi/Article'
import {useParams} from 'react-router-dom'
import {ArticleSingle} from '../Components/Article/ArticleSingle'

const ArticleSinglePage = () => {
    const {id} = useParams()

    const [article, setArticle] = useState("")

    const articlePage = async () => {
        const articleSearch = await Article(id)
        console.log(articleSearch);
        setArticle(articleSearch)
    }

    useEffect(() => {
        articlePage()
    }, [])

    useEffect(() => {
        console.log(article);
    }, [article])

    if(article){
        return (
            <ArticleSingle key={article.data.id} info={article.data}></ArticleSingle>
        )
    }else {
        return(
            <div>
                <h1>wait</h1>
            </div>
        )
    }
   
}

export default ArticleSinglePage
