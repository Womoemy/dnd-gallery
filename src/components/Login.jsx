import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
// import { auth } from "../firebase"
// import { 
//     signInWithEmailAndPassword,
//     onAuthStateChanged,
//     // signOut 
// } from "firebase/auth";


const Login = () => {

    const emailRef = useRef()
    const passwordRef = useRef()
    const { login, loading, setLoading, setToken } = useAuth()
    const [error, setError] = useState("")
    const navigate = useNavigate()

    // const [currentUser, setCurrentUser] = useState()

    async function handleSubmit(e) {
        e.preventDefault()

        if (loading) return;

        try {
            setError("")
            setLoading(true)
            const { user: { accessToken } } = await login(emailRef.current.value, passwordRef.current.value);
            localStorage.setItem('token', accessToken)
            setToken(accessToken)
            setLoading(false)
            navigate("/")
        } catch (error){
            console.log(error)
            setError(error.message)
            setLoading(false)
        }
        
    }
    // if(currentUser) {
    //     console.log(`{currentUser.name}`)
    // }

    return (
        <section className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <h3 className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                    Login to your Gallery
                </h3>
                {error && <div>{error}</div>}
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                <input 
                                    type="email" 
                                    name="email" 
                                    id="email" 
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                    // onChange={(e) => setEmail(e.target.value)}
                                    ref={emailRef}
                                    placeholder="user@example.com"
                                    required="" 
                                />
                            </div>
                            <div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-start">
                                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                            Password
                                        </label>
                                    </div>
                                    <Link to={"/reset"} className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
                                        Forgot password?
                                    </Link>
                                </div>
                                <input 
                                    type="password" 
                                    name="password" 
                                    id="password" 
                                    // onChange={(e) => setPassword(e.target.value)}
                                    ref={passwordRef}
                                    placeholder="••••••••" 
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                    required="" 
                                />
                 
                            </div>
                            <button type="submit" disabled={loading} className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Login
                            </button>
                        </form>
                    </div>
                </div>
                
            </div>
        </section>
    )
}
export default Login;