import { useState, useEffect } from 'react'
// import { onAuthStateChanged, signOut } from 'firebase/auth'
// import { signOut } from 'firebase/auth';
// import { auth } from './firebase';
// import { useAuthState } from 'react-firebase-hooks/auth';
// import Switch from './Switch'
// import { Link, useNavigate } from 'react-router-dom'
// import { AuthProvider } from './contexts/AuthContext';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import DragDropGallery from './components/DragDropGallery'
import LoadingSpinner from './components/LoadingSpinner'

function App() {
  const [isLoading, setLoading] = useState(true)
  
  useEffect(() => {
    setTimeout(() => {
      setLoading(false), 3000
    });
  }, [])

  return (
    <>
      <NavBar />
      <div className="flex h-screen justify-center items-center">
        {isLoading ? <LoadingSpinner /> : <DragDropGallery />}
      </div>
    </>
  )
}

// const PrivateRoute = () => {
//   return (

//   )
// }

export default App
