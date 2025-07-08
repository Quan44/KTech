import { Link } from 'react-router';
import { FaShoppingCart } from "react-icons/fa";

export default function Header() {
    return (
        <nav className="flex items-center justify-between bg-orange-500 p-4 bg-base-200 w-full relative">
            <div className="flex items-center gap-x-4">
                <Link to="/">
                    <h1 className="text-2xl text-white font-bold hover:text-primary transition-all duration-300 text-red">
                        Magazine
                    </h1>
                </Link>
            </div>
            <div className="absolute right-5 text-white flex items-center gap-x-4">
                <Link to="/">
                    <h1 className="text-sm font-bold hover:text-primary transition-all duration-300 text-red">
                        Home
                    </h1>
                </Link>
                <Link to="/Blog">
                    <h1 className="text-sm font-bold hover:text-primary transition-all duration-300">
                        Blog
                    </h1>
                </Link>
                <Link to="/Category">
                    <h1 className="text-sm font-bold hover:text-primary transition-all duration-300">
                        Category
                    </h1>
                </Link>
                <Link to="/Product">
                    <h1 className="text-sm font-bold hover:text-primary transition-all duration-300">
                        Product
                    </h1>
                </Link>
                <Link to="/Login">
                    <h1 className="text-sm font-bold hover:text-primary transition-all duration-300">
                        Login
                    </h1>
                </Link>
                <Link to="/Customer">
                    <h1 className="text-sm font-bold hover:text-primary transition-all duration-300">
                        Customer
                    </h1>
                </Link>
                <div className="relative bg-white rounded-md px-3 py-2 shadow-md flex items-center gap-2 text-orange-500">
                    <FaShoppingCart />
                    <span className="text-sm font-semibold">0</span>
                </div>
            </div>
        </nav>
    )
}
