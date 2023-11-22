// import Switcher from '../Switcher'
import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const [error, setError] = useState("");
  const { logout } = useAuth();
  const navigate = useNavigate();
  async function handleLogout() {
    setError("");

    try {
      await logout();
      navigate("/login");
    } catch {
      setError("Failed to log out");
    }
    console.log(error);
  }
  return (
    <div className="flex justify-between bg-gray-50 dark:bg-gray-900 px-3 w-full h-16 items-center">
      <h1 className="dark:text-gray-50 text-blue-600 text-xl font-bold">
        Drag-and-Drop Gallery
      </h1>
      <div className="flex justify-between items-center">
        {/* <Switcher style={{ marginBottom: '0' }}/> */}

        <button
          onClick={handleLogout}
          className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
        >
          Log out
        </button>
      </div>
    </div>
  );
};
export default NavBar;
