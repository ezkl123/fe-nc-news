import {Route, Routes} from 'react-router-dom'
import Header from './Header'
import Articles from './Articles'
import Navbar from './Navbar'
import SingleArticle from './SingleArticle'

function App(){

  return (<>
    <Header header="NC News Network"/>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Articles/>}/>
      <Route path="/articles" element={<Articles/>}/>
      <Route path="/articles/:article_id" element={<SingleArticle/>}/>
    </Routes>
  </>)
  
}

export default App
