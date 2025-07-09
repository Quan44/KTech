import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <nav className="flex items-center p-4 bg-base-200 w-full relative">
            <div className="flex items-center gap-x-4">
                <Link to="/">
                    <h1 className="inline-block px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-pink-500 to-red-500 rounded-full shadow-md hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer">
                        Home
                    </h1>
                </Link>
            </div>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-x-4">
                <Link to="/Form1">
                    <h1 className="inline-block px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-pink-500 to-red-500 rounded-full shadow-md hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer">
                        Practices 1
                    </h1>
                </Link>
                <Link to="/Form2">
                    <h1 className="inline-block px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-pink-500 to-red-500 rounded-full shadow-md hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer">
                        Practices 2
                    </h1>
                </Link>
                <Link to="/Form3">
                    <h1 className="inline-block px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-pink-500 to-red-500 rounded-full shadow-md hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer">
                        Practices 3
                    </h1>
                </Link>
                <Link to="/HomeWork">
                    <h1 className="inline-block px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-pink-500 to-red-500 rounded-full shadow-md hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer">
                        Home Work
                    </h1>
                </Link>
            </div>
        </nav>
    )
}
