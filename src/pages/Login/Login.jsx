import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGithub, FaGoogle } from "react-icons/fa";
import './Login.css'
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';

const Login = () => {

    const { logIn, googleLogin, githubLogin } = useContext(AuthContext)
    const location = useLocation();
    const navigate = useNavigate()
    console.log(location, navigate)

    const handleLogin = (e) => {
        e.preventDefault();
        const { email, password } = e.currentTarget;
        logIn(email.value, password.value)
            .then(res => {
                console.log(res.user)
                toast.success('You\'re successfully logged in')
                navigate(location.state || '/')
            })
            .catch(err => console.error(err))
    }

    const handleGoogleLogin = () => {
        googleLogin()
            .then(res => {
                console.log(res.user)
                toast.success('You\'ve successfully been logged in using Google')
                navigate(location.state || '/')
            })
            .catch(err => console.error(err))
    }

    const handleGithubLogin = () => {
        githubLogin()
            .then(res => {
                console.log(res.user)
                toast.success('You\'ve successfully been logged in using Github')
                navigate(location.state || '/')
            })
            .catch(err => console.error(err))
    }

    return (
        <>
            <Toaster />
            <div className="bg-[url('/media/login-bg.jpg')] bg-center bg-no-repeat object-cover mb-12 py-24 px-24">
                <h2 className='text-4xl font-bold text-white text-center w-1/2 mb-12'>Please login</h2>
                <form onSubmit={handleLogin} className="w-1/2 ">
                    <div>
                        <input
                            required
                            type="email"
                            name="email"
                            placeholder="Email"
                            className="w-full"
                        />
                    </div>
                    <div>
                        <input
                            required
                            type="password"
                            name="password"
                            placeholder="Password"
                            className="w-full"
                        />
                    </div>
                    <div>
                        <button className='w-full text-white'>Login</button>
                    </div>
                </form>
                <p className="w-1/2 flex items-center justify-between">
                    <span className='text-gray-500'>{`Don't have an account?`}</span>
                    <Link to='/register' className='text-blue-300'>Register</Link>
                </p>
                <div className='w-1/2'>
                    <div className='my-5'>
                        <p className='join_us_title text-center'> Join us with</p>
                    </div>
                    <div className='flex justify-between'>
                        <button
                            onClick={handleGoogleLogin}
                            className='w-2/5 flex items-center justify-around bg-[#db9e30] hover:bg-yellow-600 text-white rounded py-4 text-2xl'
                        >
                            <FaGoogle /> <span>Google</span>
                        </button>
                        <button
                            onClick={handleGithubLogin}
                            className='w-2/5 flex items-center justify-around bg-[#db9e30] hover:bg-yellow-600 text-white rounded py-4 text-2xl'>
                            <FaGithub /> <span>Github</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;