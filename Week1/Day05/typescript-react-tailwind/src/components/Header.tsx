import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <nav className="flex items-center p-4 bg-base-200 w-full relative">
            <div className="flex items-center gap-x-4">
                <Link to="/">
                    <h1 className="text-sm font-bold px-4 py-2 rounded-lg bg-blue-500 text-white shadow-md cursor-pointer hover:bg-blue-600 hover:scale-105 transition-all duration-300">
                        Home
                    </h1>
                </Link>
                <Link to="/EventHandling">
                    <h1 className="text-sm font-bold px-4 py-2 rounded-lg bg-blue-500 text-white shadow-md cursor-pointer hover:bg-blue-600 hover:scale-105 transition-all duration-300">
                        Event Handing
                    </h1>
                </Link>
                <Link to="/HomeWork">
                    <h1 className="text-sm font-bold px-4 py-2 rounded-lg bg-blue-500 text-white shadow-md cursor-pointer hover:bg-blue-600 hover:scale-105 transition-all duration-300">
                        HomeWork
                    </h1>
                </Link>
            </div>
        </nav>
    )
}
