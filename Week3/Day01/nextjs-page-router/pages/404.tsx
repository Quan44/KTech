import Head from 'next/head'
import Link from 'next/link'

export default function Custom404() {
    return (
        <>
            <Head>
                <title>404 - Page Not Found</title>
                <meta name="description" content="Sorry, the page you are looking for could not be found." />
            </Head>

            <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center px-4">
                <div className="text-center">
                    {/* 404 Number */}
                    <h1 className="text-9xl font-bold text-blue-600 mb-4">404</h1>

                    {/* Main heading */}
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                        Page Not Found
                    </h2>

                    {/* Description */}
                    <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
                        Sorry, we couldn&apos;t find the page you&apos;re looking for. It might have been moved, deleted, or you entered the wrong URL.
                    </p>

                    {/* Action buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/"
                            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                        >
                            Go Back Home
                        </Link>

                        <button
                            onClick={() => window.history.back()}
                            className="bg-gray-200 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-300 transition-colors font-medium"
                        >
                            Go Back
                        </button>
                    </div>

                    {/* Additional links */}
                    <div className="mt-8 text-sm text-gray-500">
                        <p>Or you can visit:</p>
                        <div className="flex justify-center gap-4 mt-2">
                            <Link href="/blog" className="text-blue-600 hover:text-blue-800 underline">
                                Blog
                            </Link>
                            <Link href="/contact" className="text-blue-600 hover:text-blue-800 underline">
                                Contact
                            </Link>
                            <Link href="/products" className="text-blue-600 hover:text-blue-800 underline">
                                Products
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Decorative illustration */}
                <div className="mt-12 text-gray-300">
                    <svg
                        className="w-32 h-32 mx-auto"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                    >
                        <path
                            fillRule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                            clipRule="evenodd"
                        />
                    </svg>
                </div>
            </div>
        </>
    )
}
