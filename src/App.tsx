import { Outlet } from "react-router-dom"
import Header from "./components/Header/Header"

import SEO from "./utils/SEO"
import { Footer } from "./components/Footer/Footer"


function App() {
  

  return (
    <>
    
      <SEO title="Home"/>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App
