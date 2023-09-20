// import { useState, useEffect } from 'react'
// import { onAuthStateChanged, signOut } from 'firebase/auth'
// import { signOut } from 'firebase/auth';
// import { auth } from './firebase';
// import { useAuthState } from 'react-firebase-hooks/auth';
// import Switch from './Switch'
// import { Link, useNavigate } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './components/login';
import Home from './components/Home';

const router = createBrowserRouter([
  {
    path: "/", 
    element: <Home />
  },
  {
    path: "/login",
    element: <Login />
  }
])

function App() {

  return (
    <>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </>
  )
}

// const PrivateRoute = () => {
//   return (

//   )
// }

export default App
