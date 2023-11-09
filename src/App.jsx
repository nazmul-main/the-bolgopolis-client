import { Outlet } from "react-router-dom"
import MainLayout from "./Components/Layout/MainLayout"
import { Toaster } from "react-hot-toast"
import Footer from "./Components/Footer/Footer"

function App() {

  return (
      <MainLayout>
        <Outlet/>
        <Footer></Footer>
        <Toaster/>
      </MainLayout>
    
  )
}

export default App
