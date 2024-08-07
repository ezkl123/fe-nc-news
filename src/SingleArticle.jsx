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
        <p>Hello</p>
        <Header header={article.title}/>
        <img src={article.article_img_url}/>
        <p>author:{article.author}</p>
        <p>topics:{article.topic}</p>
        <p>{article.body}</p>
    </>

}

export default SingleArticle;