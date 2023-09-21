import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'
import App from './App.jsx'
import './index.css'
// import Login from './routes/login.jsx'
// import { AuthProvider } from './contexts/AuthContext';
import Login from './components/Login';
// import Home from './components/Home';

const router = createBrowserRouter([
  {
    path: "/", 
    element: <App />
  },
  {
    path: "/login",
    element: <Login />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
        <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
