import { setOptions } from 'leaflet'
import React, {useContext, useState, useEffect} from 'react'
import { ArticleSingle } from '../Components/Article/ArticleSingle'
import {StoreContext} from './../Providers/StoreProvider'

const Article = () => {

    const {articles, setOffset} = useContext(StoreContext)
    const [articlesData, setArticlesData] = useState([])
    const [numberOfPage, setNumberOfPage] = useState(0)
    const [pageArray, setPageArray] = useState([])

    
    useEffect(() => {
        setPageArray([...Array(numberOfPage).keys()])
    }, [numberOfPage])
    
    useEffect(() => {
        if(articles.data){
            setNumberOfPage(Math.ceil(articles.count / 10))
            setArticlesData(Object.entries(articles.data))
        }
    }, [articles])

    if (articlesData !== undefined && articlesData.length > 0) {
        return (
            <div style={{padding:"20px"}}>
                {articlesData.map((article) => {
                    return(
                        <ArticleSingle key={article[1].id} info={article[1]}></ArticleSingle>
                    )
                })}
                <ul>
                    {
                        pageArray.map((page)=>{
                            return(
                                <button key={page} onClick={()=>{
                                    setOffset(page)
                                }}>{page}</button>
                            )
                        })
                    }
                </ul>
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