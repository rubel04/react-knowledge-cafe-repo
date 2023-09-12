import './App.css'
import Blogs from './COMPONENTS/Blogs/Blogs'
import Bookmarks from './COMPONENTS/Bookmarks/Bookmarks'
import Header from './COMPONENTS/Header/Header'

function App() {

  return (
    <>
     <Header></Header>
     <div className='md:flex'>
     <Blogs></Blogs>
     <Bookmarks></Bookmarks>
     </div>
    </>
  )
}

export default App
