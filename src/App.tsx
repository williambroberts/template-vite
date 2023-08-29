import { Outlet } from "react-router-dom"
import { Header } from "./components/Header/Header"

import SEO from "./utils/SEO"


function App() {
  

  return (
    <>
    
      <SEO title="Home"/>
      <Header/>
      <Outlet/>
    </>
  )
}

export default App
