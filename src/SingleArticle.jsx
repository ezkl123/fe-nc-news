import { useEffect, useState } from "react"
import { getSingleArticle } from "../api"
import { useParams } from "react-router-dom"
import dateFormat, {masks} from "dateformat"
import Header from "./Header"

function SingleArticle(){
    const {article_id} = useParams()

    const [article, setArticle] = useState([])

    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        getSingleArticle(article_id)
        .then((articleResponse) => {
            setArticle(articleResponse)
            setIsLoading(false)
        })
    }, [])

    if (isLoading){
        return <>
            <h1>Loading...</h1>
        </>
    }

    return <>
        <Header header={article.title}/>
        <img src={article.article_img_url}/>
        <p>Author:{article.author}</p>
        <p>Topics:{article.topic}</p>
        <p>{article.body}</p>
        <p>Posted:{new Date(article.created_at).toLocaleDateString()}</p>
        <p>{article.comment_count} comments</p>
    </>

}

export default SingleArticle;