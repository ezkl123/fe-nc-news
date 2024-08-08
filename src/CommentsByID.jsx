import { getCommentsByID } from "../api";
import { useParams } from "react-router-dom";
import {useEffect, useState} from "react"


function CommentsByID(){

    const {article_id} = useParams()
    console.log(article_id)

    const [comments, setComments] = useState([])

    useEffect(() => {
        getCommentsByID(article_id)
        .then((commentsResponse) => {
            setComments(commentsResponse)
        })
    }, [])

    return (
        <>
        <button>Comment++</button>
        <ul>
            {comments.map((comment) => {
                return <div key={comment.comment_id}>
                    <p>Posted By {comment.author}</p>
                    <p>{comment.body}</p>
                    <p>Posted at {new Date(comment.created_at).toLocaleDateString()}</p>
                    <p>{comment.votes}</p>
                </div>
            })}
        </ul>
        
        </>
    )

}

export default CommentsByID;