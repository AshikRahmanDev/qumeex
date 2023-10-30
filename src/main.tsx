import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import { RootLayout } from './layout/RootLayout.tsx'
import { Home } from './pages/Home.tsx'

const router = createBrowserRouter([{path:"/",element:<RootLayout/>,children:[{path:"/",element:<Home/>}]}])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
