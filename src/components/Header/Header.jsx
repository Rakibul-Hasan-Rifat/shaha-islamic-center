import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const Header = () => {
    return (
        <header className="bg-[url('/media/header-bg.jpg')] h-screen bg-no-repeat bg-top text-white py-12">
            <div className="">
                <Link>
                    <img src='./media/logo.webp' alt="" className="mx-auto"/>
                </Link>
            </div>
            <Navbar/>
        </header>
    );
};

export default Header;