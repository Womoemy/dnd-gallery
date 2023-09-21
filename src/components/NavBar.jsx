// import Switcher from '../Switcher'
import { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { Link, useNavigate } from 'react-router-dom';

const NavBar = () => {
    const [error, setError] = useState("")
    const { currentUser, logout } = useAuth()
    const navigate = useNavigate()
    async function handleLogout() {
        setError("")

        try {
            await logout()
            navigate("/login")
        } catch {
            setError("Failed to log out")
        }
        console.log(error);
    }
    return (
        <div className='flex justify-between bg-gray-100 dark:bg-gray-900 px-3 w-full h-16 items-center'>
            <h1 className='dark:text-gray-50 text-xl font-bold' >Drag-and-Drop Gallery</h1>
            <div className='flex justify-between items-center'>
            
                {/* <Switcher style={{ marginBottom: '0' }}/> */}
            
              
              <div>
                {currentUser ? (
                  <button onClick={handleLogout}
                    className='border border-solid border-red-700'
                  >Log out</button>
                ) : (
                  <Link to="/login">Log in</Link>
                )}
              </div>
            </div>
      </div>
    )
}
export default NavBar;