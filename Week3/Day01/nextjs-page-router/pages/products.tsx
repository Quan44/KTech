import Head from 'next/head'

export default function ProductsPage() {
    return (
        <>
            <Head>
                <title>Products - My App</title>
                <meta name="description" content="Discover our amazing collection of products" />
            </Head>

            <div className="min-h-screen bg-gray-50">
                <div className="bg-white shadow-sm">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                        <div className="text-center">
                            <h1 className="text-4xl font-bold text-gray-900 mb-4">
                                Our Products
                            </h1>
                            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                                Discover our carefully curated selection of high-quality products designed to enhance your lifestyle.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
