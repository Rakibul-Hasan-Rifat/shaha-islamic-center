import { Link, NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import './Navbar.css';
import { AuthContext } from "../../context/AuthProvider/AuthProvider";

const Navbar = () => {

    const [show, setShow] = useState(false)
    const { user, logOut } = useContext(AuthContext)

    console.log(user, user?.photoURL, user?.displayName, show)

    const handleLogOut = () => {
        logOut()
            .then(() => {
                toast.success('You have successfully logged out!')
            })
            .catch(err => console.error(err))
    }

    return (
        <>
            <Toaster />
            <nav className="w-2/3 mx-auto my-12">
                <div className="flex items-center justify-between w-full">
                    <div className="">
                        <ul className="menu menu-horizontal px-1">
                            <li><NavLink to='/'>Home</NavLink></li>
                            <li><NavLink to='/login'>Login</NavLink></li>
                            <li><NavLink to='/register'>Register</NavLink></li>
                            <li><NavLink to='/events'>Events</NavLink></li>
                            <li><NavLink to='/team'>Team</NavLink></li>
                        </ul>
                    </div>
                    <div className="">
                        {
                            user ?
                                <>
                                    <div className="flex gap-5 items-center relative">
                                        <img
                                            onClick={() => setShow(!show)}
                                            src={user.photoURL || '../../media/user.png'}
                                            className="w-14 h-14 rounded-full bg-white cursor-pointer"
                                            alt="user img"
                                        />
                                        <div className={`${show ? 'flex' : 'hidden'} flex-col w-44 p-5 rounded-lg bg-white text-yellow-500 absolute top-full right-0`}>
                                            <span className="p-4 border-b border-b-yellow-500">{user.displayName || 'No user name'}</span>
                                            <button
                                                onClick={handleLogOut}
                                                className="btn bg-white outline-none mt-3 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-white hover:border-transparent"
                                            >
                                                Logout
                                            </button>
                                        </div>
                                    </div>
                                </>
                                :
                                <>
                                    <Link
                                        to='/login'
                                        className="btn btn-sm bg-white border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-white hover:border-transparent"
                                    >
                                        Login
                                    </Link>
                                </>
                        }
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;