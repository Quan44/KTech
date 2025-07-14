import Link from 'next/link'

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center px-4">
            <h2 className="text-4xl font-bold text-red-500 mb-4">Not Found</h2>
            <p className="text-gray-600 mb-6">Could not find requested resource.</p>
            <Link
                href="/"
                className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
            >
                Return Home
            </Link>
        </div>
    )
}