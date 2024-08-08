import {Route, Routes} from 'react-router-dom'
import Header from './Header'
import Articles from './Articles'
import Navbar from './Navbar'
import SingleArticle from './SingleArticle'
import CommentsByID from './CommentsByID'

function App(){

  return (<>
    <Header header="NC News Network"/>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Articles/>}/>
      <Route path="/articles" element={<Articles/>}/>
      <Route path="/articles/:article_id" element={<SingleArticle/>}/>
      <Route path="/articles/:article_id/comments" element={<CommentsByID/>}/>
    </Routes>
  </>)
  
}

export default App
