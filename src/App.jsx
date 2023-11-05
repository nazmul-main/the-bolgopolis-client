import { Outlet } from "react-router-dom"
import MainLayout from "./Components/Layout/MainLayout"
import { Toaster } from "react-hot-toast"

function App() {

  return (
      <MainLayout>
        <Outlet/>
        <Toaster/>
      </MainLayout>
     
  )
}

export default App
