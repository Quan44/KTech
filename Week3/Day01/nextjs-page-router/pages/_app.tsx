import type { AppProps } from 'next/app'
import Link from 'next/link'
import { useRouter } from 'next/router'
import '../styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-lg border-b">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <Link href="/" className="text-xl font-bold text-gray-800 hover:text-blue-600 transition-colors">
                My App
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  href="/"
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${router.pathname === '/'
                      ? 'bg-blue-100 text-blue-700'
                      : 'text-gray-600 hover:text-blue-600'
                    }`}
                >
                  Home
                </Link>
                <Link
                  href="/blog"
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${router.pathname === '/blog'
                      ? 'bg-blue-100 text-blue-700'
                      : 'text-gray-600 hover:text-blue-600'
                    }`}
                >
                  Blog
                </Link>
                <Link
                  href="/contact"
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${router.pathname === '/contact'
                      ? 'bg-blue-100 text-blue-700'
                      : 'text-gray-600 hover:text-blue-600'
                    }`}
                >
                  Contact
                </Link>
                <Link
                  href="/products"
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${router.pathname === '/products'
                      ? 'bg-blue-100 text-blue-700'
                      : 'text-gray-600 hover:text-blue-600'
                    }`}
                >
                  Products
                </Link>
                <Link
                  href="/login"
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${router.pathname === '/login'
                      ? 'bg-blue-700 text-white'
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                    }`}
                >
                  Login
                </Link>
              </div>
            </div>
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button className="text-gray-600 hover:text-blue-600 focus:outline-none focus:text-blue-600">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <Component {...pageProps} />
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-400">Footer My App.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}