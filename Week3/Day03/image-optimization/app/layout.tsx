import Link from "next/link";
import Image from "next/image";
import "./globals.css";

export const metadata = {
  title: "Thegioididong",
  description: "A simple e-commerce site built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gray-50 min-h-screen">
        <Image
          src="https://cdnv2.tgdd.vn/mwg-static/tgdd/Banner/e4/d2/e4d215b404d123b25e8b8f5c01ac2f56.png"
          alt="Pannel"
          width={1400}
          height={100}
          className="object-cover"
        />
        <nav className="bg-yellow-300 shadow-md">
          <div className="container mx-auto px-4 py-3 flex justify-between items-center">
            <div className="text-xl font-bold text-stone-900">Thegioididong</div>
            <div className="space-x-4">
              <Link href="/" className="text-gray-900 hover:text-white transition font-medium">
                Home Page
              </Link>
              <Link href="/products" className="text-gray-900 hover:text-white transition font-medium">
                Product List
              </Link>
            </div>
          </div>
        </nav>
        <main className="container mx-auto px-2 py-5">
          <Image
            src="https://cdnv2.tgdd.vn/mwg-static/tgdd/Banner/a2/6e/a26ed4cbc89ec9523d78c43ba4d6f2d4.png"
            alt="Pannel"
            width={1400}
            height={100}
            className="object-cover rounded-lg mb-5"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
          {children}
        </main>
      </body>
    </html>
  );
}
