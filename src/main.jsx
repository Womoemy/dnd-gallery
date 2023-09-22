import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { AuthContext } from './contexts/AuthContext'
import App from './App.jsx'
import './index.css'
// import { AuthProvider } from './contexts/AuthContext';
import { ProtectedRoutes } from './components/ProtectedRoutes';

import Login from './components/Login';
// import Home from './components/Home';

const router = createBrowserRouter([
  {
    path: "/", 
    element:<ProtectedRoutes><App /></ProtectedRoutes> 
  },
  {
    path: "/login",
    element: <Login />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContext>
        <RouterProvider router={router} />
    </AuthContext>
  </React.StrictMode>,
)
