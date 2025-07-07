import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <nav className="flex items-center p-4 bg-base-200 w-full relative">
            <div className="flex items-center gap-x-4">
                <Link to="/">
                    <h1 className="text-sm font-bold hover:text-primary transition-all duration-300 text-red">
                        Home
                    </h1>
                </Link>
                <Link to="/CRUDPage">
                    <h1 className="text-sm font-bold hover:text-primary transition-all duration-300 text-red">
                        CRUD
                    </h1>
                </Link>
                <Link to="/WheatherApp">
                    <h1 className="text-sm font-bold hover:text-primary transition-all duration-300 text-red">
                        Wheather App
                    </h1>
                </Link>
            </div>
        </nav>
    )
}
