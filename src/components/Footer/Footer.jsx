import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <footer className="bg-[url('/media/footer-bg.jpg')] bg-no-repeat bg-top text-white p-32 font-serif">
            <div className="">
                <Link>
                    <img src='/media/logo.webp' alt="" className="mx-auto"/>
                </Link>
            </div>
            <div className="flex justify-between mt-20 pb-12 border-b border-b-green-300">
                <div>
                    <h3 className="foot_sec_title text-2xl my-10">Menu</h3>
                    <div className="flex flex-col text-center text-[#7a7b79]">
                        <Link>About</Link>
                        <Link>Events</Link>
                        <Link>Services</Link>
                        <Link>Contact</Link>
                    </div>
                </div>
                <div>
                    <h3 className="foot_sec_title text-2xl my-10">Services</h3>
                    <div className="flex flex-col text-center text-[#7a7b79]">
                        <Link>Marriage</Link>
                        <Link>Funeral</Link>
                        <Link>Shahada</Link>
                        <Link>Community</Link>
                    </div>
                </div>
                <div>
                    <h3 className="foot_sec_title text-2xl my-10">Contact</h3>
                    <div className="flex flex-col text-center text-[#7a7b79]">
                        <span>1 888 123 4567</span>
                        <span>info@yousite.com</span>
                        <span>1122 Potter Rd,  </span>
                        <span>Antelope, CA 32802</span>
                    </div>
                </div>
                <div>
                    <h3 className="foot_sec_title text-2xl my-10">Social</h3>
                    <div className="flex flex-col text-center text-[#7a7b79]">
                        <Link to='https://www.facebook.com/' target='_blank'>Facebook</Link>
                        <Link to='https://www.pinterest.com/' target='_blank'>Pinterest</Link>
                        <Link to='https://twitter.com/' target='_blank'>Twitter</Link>
                        <Link to='https://www.instagram.com/' target='_blank'>Instagram</Link>
                    </div>
                </div>
            </div>
            <div className='mt-12'>
                <p className='text-center text-[#7a7b79]'>Copyright © 2023 by AncoraThemes. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;