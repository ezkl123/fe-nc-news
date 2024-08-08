import axios from 'axios'

const api = axios.create({
    baseURL: 'https://be-nc-news-y4d1.onrender.com'
})

function getArticles(){
    return api.get('/api/articles').then(({data: {articles}}) => {
        return articles;
    })
}

function getSingleArticle(articleId){
    return api.get(`/api/articles/${articleId}`).then((response) => {
        return response.data.article;
    })
}

function getCommentsByID(articleId){
    return api.get(`/api/articles/${articleId}/comments`).then((response) => {
        return response.data.comments;
    })
}

function updateArticleVotes(articleId){
    return api.patch(`/api/articles/${articleId}`, {inc_votes: 1}).then((response) => {
        console.log(response.data.article.votes)
        return response.data.article.votes;
    })
}

export { getArticles, getSingleArticle, getCommentsByID, updateArticleVotes }