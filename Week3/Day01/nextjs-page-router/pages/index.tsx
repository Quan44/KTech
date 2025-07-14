import Head from 'next/head'

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Home - My App</title>
        <meta name="description" content="Welcome to My App - Your one-stop solution" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <section className="pt-20 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Welcome to{' '}
                <span className="text-blue-600">My App</span>
              </h1>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}