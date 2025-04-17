import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Contact from './Contact.tsx'
import Experiences from './Experiences.tsx'
import OurTeam from "./OurTeam.tsx"

import {createBrowserRouter, RouterProvider} from 'react-router-dom'

const router = createBrowserRouter([
  {path:"/", element:<App/>},
  {path:"/contact", element:<Contact/>},
  {path:"/experiences", element:<Experiences/>},
  {path:"/team", element:<OurTeam/>},
],)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
