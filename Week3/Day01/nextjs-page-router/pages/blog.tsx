import Head from 'next/head'

export default function BlogPage() {
    return (
        <>
            <Head>
                <title>Blog - My App</title>
                <meta name="description" content="Read our latest blog posts about web development, design, and technology" />
            </Head>

            <div className="min-h-screen bg-gray-50">
                <div className="bg-white shadow-sm">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                        <div className="text-center">
                            <h1 className="text-4xl font-bold text-gray-900 mb-4">
                                Our Blog
                            </h1>
                            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                                Stay updated with the latest insights, tutorials, and industry trends.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
