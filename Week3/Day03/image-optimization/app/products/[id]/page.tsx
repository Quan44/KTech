import React from 'react'
import ProductDisplay from '@/components/ProductDisplay';

const getProductById = async (id: number) => {
  const res = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`, {
    next: {
      revalidate: 30, // Revalidate every 30 seconds
    },
    cache: 'no-store', // Disable caching for this request
  });
  if (!res.ok) {
    throw new Error('Failed to fetch product');
  }
  return res.json();
}

async function ProductDetail({ params }: { params: Promise<{ id: number }> }) {
  const { id } = await params;
  const product = await getProductById(id);

  if (!product) {
    return (
      <div className="p-10 text-center text-red-500">
        <h1 className="text-2xl font-semibold">Product not found</h1>
      </div>
    );
  }

  return <ProductDisplay product={product} />;
}

export default ProductDetail