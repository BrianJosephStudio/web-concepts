import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import LastStep from './components/fullProject.tsx'

const router = createBrowserRouter([
  {
    path: "/finished-project",
    element: <LastStep/>
  },
  {
    path: "/",
    element: <App />
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
