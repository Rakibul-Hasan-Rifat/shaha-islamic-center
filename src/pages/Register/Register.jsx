import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import { Link } from "react-router-dom";
import { FaGithub, FaGoogle } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";

const Register = () => {

    const { signUp, googleLogin, githubLogin } = useContext(AuthContext)

    const handleRegister = (e) => {
        e.preventDefault();

        const { name, email, password, photo } = e.currentTarget;
        const pattern = /^(?=.*[A-Z])(?=.*[\W_]).*$/;
        console.log(name, photo)
        
        if (password.value.length < 6) {
            toast.error('Your password should have at least 6 characters!')
        } else if (!pattern.test(password.value)) {
            toast.error('Password should contain at least an uppercase and a special character!')
        }
        else {
        console.log(password.value.length)
        signUp(email.value, password.value)
            .then(res => {
                console.log(res.user)
                toast.success('You\'re successfully registered')
            })
            .catch(err => {
                console.error(err.message)
                toast.error(err.message)
            })
        }
    }

    const handleGoogleLogin = () => {
        googleLogin()
            .then(res => {
                console.log(res.user)
                toast.success('You\'ve successfully been registered using Google')
            })
            .catch(err => console.error(err))
    }

    const handleGithubLogin = () => {
        githubLogin()
            .then(res => {
                console.log(res.user)
                toast.success('You\'ve successfully been registered using Github')
            })
            .catch(err => console.error(err))
    }

    return (
        <>
            <Toaster />
            <div className="bg-[url('/media/register-bg.jpg')] bg-center bg-no-repeat object-cover mb-12 py-24 px-24">
                <div className="w-1/2 ml-auto">
                    <h2 className='text-4xl font-bold text-white text-center mb-12'>Please register</h2>
                    <form onSubmit={handleRegister} className="">
                        <div>
                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                className="w-full"
                            />
                        </div>
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
                            <input
                                type="text"
                                name="photo"
                                placeholder="Photo URL"
                                className="w-full"
                            />
                        </div>
                        <div>
                            <button className='w-full text-white'>Register</button>
                        </div>
                    </form>
                    <p className="flex items-center justify-between">
                        <span className='text-gray-500'>{`Already have an account?`}</span>
                        <Link to='/login' className='text-blue-300'>Login</Link>
                    </p>
                    <div className=''>
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
            </div>
        </>
    );
};

export default Register;