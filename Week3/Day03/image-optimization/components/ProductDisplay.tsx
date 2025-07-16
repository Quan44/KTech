'use client';
import { Product } from '@/types/product';
import Image from 'next/image';
import React, { useState } from 'react'

const ProductDisplay = ({ product }: { product: Product }) => {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Slider ảnh sản phẩm */}
      <div>
        <div className="w-full overflow-hidden rounded-lg border relative h-[400px]">
          <Image
            src={product.images?.[selectedImage]}
            alt={product.title}
            fill
            className="object-cover rounded-lg"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>

        {/* Thumbnails nhỏ */}
        <div className="flex gap-2 mt-4">
          {product.images?.map((img: string, index: number) => (
            <div 
              key={index} 
              className={`relative w-20 h-20 border rounded overflow-hidden cursor-pointer transition-all duration-200 ${
                selectedImage === index 
                  ? 'border-blue-500 border-2 ring-2 ring-blue-200' 
                  : 'border-gray-300 hover:border-gray-400'
              }`}
              onClick={() => setSelectedImage(index)}
            >
              <Image
                src={img}
                alt={`Thumbnail ${index}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      <div>
        <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <p className="text-xl font-semibold text-green-600 mb-6">${product.price}</p>

        <div className="flex gap-4">
          <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded transition">
            Mua Ngay
          </button>
          <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded transition">
            Thêm vào Giỏ
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
