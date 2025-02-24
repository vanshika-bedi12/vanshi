
import { createBrowserRouter, Router } from 'react-router-dom'
import { RouterProvider } from "react-router-dom";
import './App.css'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import Pastes from './Components/Pastes'
import ViewPastes from './Components/ViewPastes'

const router=createBrowserRouter(
  [
    {
        path:"/",
        element:
        <div>
          <Navbar></Navbar>
          <Home></Home>
        </div>
    },
    {
      path:"/pastes",
      element:
      <div>
           <Navbar></Navbar>
           <Pastes></Pastes>
      </div>
    },
    {
      path:"/pastes/:id",
      element:
      <div>
          <Navbar></Navbar>
          <ViewPastes></ViewPastes>
      </div>
    } ,
   
  ]
)

function App() {
 

  return (
    <div>
    <RouterProvider router={router}/>
    </div>
  )
}

export default App
