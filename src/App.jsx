import { useState } from 'react'
import './App.css'
import Nav from './Component/Nav/Nav'
import Home from './Component/Pages/Home/Home'
import Blog from './Component/Pages/Blog/Blog'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Component/Layout/Layout'
import About from './Component/Pages/About/About'
import BlogDetails from './Component/Pages/BlogDetails/BlogDetails'
import NotFound from './Component/NotFound/NotFound'
function App() {
let routes = createBrowserRouter([
 {path:'',element:<Layout/> , children:[
{index:true,element:<Home/>},
{path:"about",element:<About/>},
{path:"blog",element:<Blog/>},
{path:"blog/:slug",element:<BlogDetails/>},
{path:"*",element:<NotFound/>},


  ]}

  ])

  return (
  <>
  
<RouterProvider router={routes}/>
  </>
  )
}

export default App
