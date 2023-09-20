import Switcher from '../Switcher'
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
        <div className='flex justify-between bg-gray-50 dark:bg-gray-900'>
            <h1>Drag-and-Drop Image Gallery</h1>
            <Switcher />
            <div>
              {currentUser ? (
                <button onClick={handleLogout}>Log out</button>
              ) : (
                <Link to="/login">Log in</Link>
              )}
            </div>
      </div>
    )
}
export default NavBar;