import { Product } from '@/types/product'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const ProductGrid: React.FC<{ products: Product[] }> = ({ products }) => {
    return (
        <div className="container mx-auto px-4">
            <span className='text-3xl text-red-500 font-bold'>Sản phẩm nổi bật</span>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mt-2">
                {products.length === 0 ? (
                    <div className="col-span-full text-center text-gray-400">No products found.</div>
                ) : (
                    products.map((product) => (
                        <div
                            key={product.id}
                            className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition-shadow duration-200 flex flex-col items-center group cursor-pointer"
                        >
                            <Link href={`/products/${product.id}`} className="w-full">
                                <div className="w-full aspect-square mb-3 overflow-hidden rounded-lg bg-gray-100 flex items-center justify-center">
                                    {product.images && product.images.length > 0 ? (
                                        <Image
                                            src={product.images[0]}
                                            alt={product.title}
                                            width={300}
                                            height={300}
                                            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-200"
                                        />
                                    ) : (
                                        <div className="text-gray-300 text-4xl">🛒</div>
                                    )}
                                </div>
                                <div className="font-semibold line-clamp-2 mb-1">{product.title}</div>
                                <div className="line-clamp-2 mb-1">{product.description}</div>
                                <div className="text-blue-600 font-bold text-lg">${product.price}</div>
                            </Link>
                        </div>
                    ))
                )}
            </div>
        </div >
    );
};

export default ProductGrid;