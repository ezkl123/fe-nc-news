import { useEffect, useState } from "react";
import { updateArticleVotes } from "../api";

function VoteHandler(props){

    const {articleId} = props;

    const [voteCount, setVoteCount] = useState(0)

    useEffect(() => {
        updateArticleVotes(articleId).then((initialVotes) => {
            setVoteCount(initialVotes - 1)
        })
    }, [])


    function handleUpvote(){
        setVoteCount((currVoteCount) => {
            currVoteCount + 1
        })
    }

    function handleDownvote(){
        setVoteCount((currVoteCount) => {
            currVoteCount - 1
        })
    }

    return (<>
        <button onClick={handleUpvote}>Upvote</button>
        <p>{voteCount}</p>
        <button onClick={handleDownvote}>Downvote</button>

        </>
    )

}

export default VoteHandler;