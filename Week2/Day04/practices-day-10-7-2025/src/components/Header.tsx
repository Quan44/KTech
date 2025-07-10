import AuthContext from '@/context';
import { User } from '@/types';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        // Load user from localStorage if available
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    const handleLogout = async () => {
        // Clear user from state and localStorage
        setUser(null);
        localStorage.removeItem('user');
        localStorage.removeItem('access_token');
        // Optionally, redirect to login page or show a message
        window.location.href = '/login';
    };

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            <div className='bg-gray-50'>
                <nav className="bg-white shadow-md border-b border-gray-200">
                    <div className="container mx-auto px-4">
                        <div className="flex items-center justify-between h-16">
                            <div className="flex items-center">
                                <h1 className="text-xl font-bold text-gray-800">
                                    Tasks Management
                                </h1>
                            </div>
                            <div className="flex space-x-1">
                                <Link to="/tasks">
                                    <h1 className="px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 text-gray-600 hover:text-gray-900 hover:bg-gray-100">
                                        Task
                                    </h1>
                                </Link>
                                <Link to="/create">
                                    <h1 className="px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 text-gray-600 hover:text-gray-900 hover:bg-gray-100">
                                        Create Task
                                    </h1>
                                </Link>
                                <Link to="/assignee-me">
                                    <h1 className="px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 text-gray-600 hover:text-gray-900 hover:bg-gray-100">
                                        Assigned to Me
                                    </h1>
                                </Link>
                                {user && <Link to="/logout">
                                    <button
                                        className="px-4 py-2 rounded-md text-sm bg-red-500 font-medium transition-colors duration-200 text-white hover:bg-red-600"
                                        onClick={handleLogout}
                                    >
                                        Logout
                                    </button>
                                </Link>}
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </AuthContext.Provider>
    )
}
