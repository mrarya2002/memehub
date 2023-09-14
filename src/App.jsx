import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Play from "./pages/Play"
import NotFound from "./pages/NotFound"
import Upload from "./pages/Upload"

function App() {
  return (
    <>
   <Router>
    <Header/>
    <Routes>
      <Route exact path="/" element = {<Home/>} />
      <Route path="/play/:id" element = {<Play/>} />
      <Route path="/upload" element = {<Upload/>} />
      <Route path="/*" element = {<NotFound/>} />
    </Routes>
    <Footer/>
   </Router>
    </>
  )
}

export default App
