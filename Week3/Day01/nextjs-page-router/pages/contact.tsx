import Head from 'next/head'

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact - My App</title>
        <meta name="description" content="Get in touch with us. We'd love to hear from you." />
      </Head>
      
      <div className="min-h-screen bg-gray-50">
        <div className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Contact Us
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
