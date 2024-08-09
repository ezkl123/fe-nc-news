import { useEffect, useState } from "react";
import { upvoteArticleVotes, downvoteArticleVotes } from "../api";

function VoteHandler(props){

    const {articleId} = props;

    const [voteCount, setVoteCount] = useState(0)

    const [error, setError] = useState(null)

    useEffect(() => {
        setVoteCount((currVoteCount) => {
            currVoteCount
        })
    }, [])


    function handleUpvote(){
        setVoteCount((currVoteCount) => {
            currVoteCount + 1
        })
        setError(null)
        upvoteArticleVotes(articleId)
        .then((votes) => {
            setVoteCount(votes)
        })
        .catch((err) => {
            setVoteCount((currentLikesCount) => currentLikesCount - 1);
            setError("Your upvote was not successful. Please try again!");
        })
    }

    function handleDownvote(){
        setVoteCount((currVoteCount) => {
            currVoteCount - 1
        })
        downvoteArticleVotes(articleId)
        .then((initialVotes) => {
            setVoteCount(initialVotes)
        })
        .catch((err) => {
            setVoteCount((currentLikesCount) => currentLikesCount + 1);
            setError("Your downvote was not successful. Please try again!");
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