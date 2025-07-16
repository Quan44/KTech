import ProductGrid from '@/components/ProductGrid';
import React from 'react'

async function ProductList() {
  async function fetchProducts() {
    const res = await fetch('https://api.escuelajs.co/api/v1/products?offset=0&limit=10');
    if (!res.ok) {
      throw new Error('Failed to fetch products');
    }
    return res.json();
  }
  const products = await fetchProducts();

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
      {/* Sidebar trái - Quảng cáo, ẩn trên mobile */}
      <aside className="hidden md:block md:col-span-2 bg-gray-100 rounded-lg">
        <div className="text-center text-sm text-gray-500">Ad Left</div>
      </aside>

      {/* Nội dung chính */}
      <main className="col-span-1 md:col-span-8 rounded-lg bg-gray-100 p-2">
          <ProductGrid products={products} />
      </main>

      {/* Sidebar phải - Quảng cáo, ẩn trên mobile */}
      <aside className="hidden md:block md:col-span-2 bg-gray-100 rounded-lg">
        <div className="text-center text-sm text-gray-500">Ad Right</div>
      </aside>
    </div>
  )
}

export default ProductList