/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect } from 'react';
import Delete from '../Delete';
import Update from '../Update';
// import Delete from './delete';
// import Update from './update';

const url = 'https://api.escuelajs.co/api/v1/products';

type Product = {
    id: number;
    title: string;
    price: number;
    description: string;
    category: { id: number; name: string };
    images: string[];
};

type Props = {
    reload?: number;
};
export default function List({ reload = 0 }: Props) {
    const [selectedProduct, setSelectedProduct] = React.useState<Product | null>(null);
    const [products, setProducts] = React.useState<Product[]>([]);
    const [loading, setLoading] = React.useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setProducts(data);
                setLoading(false);
            } catch (error) {
                console.error('Fetch error:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchProducts();
    }, [reload]);

    const handleOnSelect = (product: any) => {
        setSelectedProduct(product);
    };

    const handleOnUpdated = (product: any) => {
        setProducts((prev) => prev.map((p: any) => (p.id === product.id ? product : p)));
        setSelectedProduct(null);
    };

    return (
        <div className="container mx-auto bg-gradient-to-br from-blue-50 to-purple-100 rounded-2xl shadow-2xl mb-8 p-8">
            {loading && <p className="text-lg text-blue-600 font-semibold animate-pulse">Loading...</p>}
            <div className="overflow-x-auto rounded-xl shadow-lg">
                <table className="min-w-full bg-white rounded-xl overflow-hidden">
                    <thead>
                        <tr className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                            <th className="p-4 text-left font-bold">ID</th>
                            <th className="p-4 text-left font-bold">Title</th>
                            <th className="p-4 text-left font-bold">Price</th>
                            <th className="p-4 text-left font-bold">Description</th>
                            <th className="p-4 text-left font-bold">Category</th>
                            <th className="p-4 text-left font-bold">Images</th>
                            <th className="p-4 text-left font-bold">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products?.map((product: any, index) => (
                            <tr
                                key={index}
                                className="hover:bg-gradient-to-r hover:from-blue-100 hover:to-purple-100 transition-colors duration-200 border-b border-gray-200"
                            >
                                <td className="p-4 text-right font-mono text-blue-700">{product.id}</td>
                                <td className="p-4 font-semibold text-gray-800 border border-gray-200">{product.title}</td>
                                <td className="p-4 text-green-600 font-bold border border-gray-200">${product.price}</td>
                                <td className="p-4 text-gray-600 border border-gray-200">{product.description}</td>
                                <td className="p-4 border border-gray-200">
                                    <span className="inline-block bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-medium shadow">
                                        {product.category?.name}
                                    </span>
                                </td>
                                <td className="p-4 whitespace-nowrap border border-gray-200">
                                    {product.images && product.images.length > 0 && (
                                        <img
                                            src={product.images[0]}
                                            alt={product.title}
                                            className="w-16 h-16 object-cover rounded-lg shadow-md border-2 border-purple-200"
                                        />
                                    )}
                                </td>
                                <td className="p-4 whitespace-nowrap border border-gray-200">
                                    <div className="flex gap-2 justify-end">
                                        <button
                                            onClick={() => handleOnSelect(product)}
                                            className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-1 px-4 rounded-lg shadow hover:from-blue-600 hover:to-purple-600 transition-all font-semibold focus:outline-none focus:ring-2 focus:ring-blue-300"
                                        >
                                            Edit
                                        </button>
                                        <Delete
                                            productId={product.id}
                                            onDeleted={(id) => {
                                                setProducts((prev) => prev.filter((product: any) => product.id !== id));
                                            }}
                                        />
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {selectedProduct && (
                <Update
                    productId={selectedProduct.id}
                    onUpdated={handleOnUpdated}
                    onClose={() => setSelectedProduct(null)}
                />
            )}
        </div>
    );
}