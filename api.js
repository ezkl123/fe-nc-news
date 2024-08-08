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
    // console.log(articleId)
    return api.get(`/api/articles/${articleId}`).then((response) => {
        console.log(response.data.article)
        return response.data.article;
    })
}

export { getArticles, getSingleArticle }