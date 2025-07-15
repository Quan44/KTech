import Link from "next/link";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <nav className="bg-white border-b border-gray-200 shadow px-6 py-4">
          <div className="flex items-center justify-between max-w-7xl mx-auto">
            <div className="flex space-x-6">
              <Link
                href="/"
                className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
              >
                Home
              </Link>
              <Link
                href="/task-ssr"
                className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
              >
                Task SSR
              </Link>
              <Link
                href="/task-ssg"
                className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
              >
                Task SSG
              </Link>
              <Link
                href="/task-csr"
                className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
              >
                Task CSR
              </Link>
              <Link
                href="/task-isr"
                className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
              >
                Task ISR
              </Link>
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  )
}