import { useEffect, useState } from "react"
import {getArticles} from "../api"
import {Link} from 'react-router-dom'

function Articles(){

    const [articles, setArticles] = useState([])

    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        getArticles().then((articles) => {
            setArticles(articles)
            setIsLoading(false)
        })
    }, [])

    if (isLoading){
        return <>
            <h1>Loading...</h1>
        </>
    }

    return (
        <ul>
            {articles.map((article) => {
                return <section key={article.article_id}>
                    <Link to={`/articles/${article.article_id}`}><h2>{article.title}</h2></Link>
                    <img src={article.article_img_url} alt={article.title}/>
                </section>
            })}
        </ul>
    )
}

export default Articles