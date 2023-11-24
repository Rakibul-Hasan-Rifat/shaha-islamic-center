import {Link} from 'react-router-dom'

const ErrorElement = () => {
    return (
        <div className="h-screen flex flex-col items-center justify-center gap-8 bg-[#2b2b2b] text-white">
            <div className="flex items-center gap-7">
                <span className="text-9xl font-extrabold">404</span>
                <div className="flex flex-col text-4xl font-extrabold">
                    <span>Not</span>
                    <span>Found</span>
                </div>
            </div>
            <Link>
                <button className='btn bg-yellow-500 text-white hover:bg-yellow-600'>Back Home</button>
            </Link>
        </div>
    );
};

export default ErrorElement;