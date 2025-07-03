import { useState } from "react";
import { FaTimes } from "react-icons/fa";

const initialProducts = [
    {
        id: 1,
        name: "vivo Y18 8GB/128GB",
        price: "4.410.000₫",
        img: "/assets/images/deal/1.jpg",
        status: "",
        priceClass: "text-red-600 font-bold",
    },
    {
        id: 2,
        name: "FESTINA 40 mm Nam F20007/2",
        price: "3.646.000₫",
        img: "/assets/images/deal/2.jpg",
        status: "",
        priceClass: "text-red-600 font-bold",
    },
    {
        id: 3,
        name: "Samsung Galaxy A55 5G 8GB/256GB",
        price: "",
        img: "/assets/images/deal/3.jpg",
        status: "Ngừng kinh doanh",
        priceClass: "text-red-600 font-bold",
        statusClass: "text-red-600 font-bold",
    },
    {
        id: 4,
        name: "Samsung Galaxy A56 5G 12GB/256GB",
        price: "11.480.000₫",
        img: "/assets/images/deal/4.jpg",
        status: "",
        priceClass: "text-red-600 font-bold",
    },
];

export default function State03() {
    const [products, setProducts] = useState(initialProducts);

    const handleRemove = (id: number) => {
        setProducts(products.filter((p) => p.id !== id));
    };

    const handleClear = () => {
        setProducts([]);
    };

    return (
        <div className="bg-gray-50 rounded-xl p-4">
            <div className="flex justify-between items-center mb-2">
                <span className="text-lg font-semibold text-gray-800">Sản phẩm đã xem</span>
                <button
                    className="text-sm text-gray-400 hover:text-blue-600"
                    onClick={handleClear}
                >
                    Xóa lịch sử
                </button>
            </div>
            <div className="flex items-center gap-3 overflow-x-auto">
                {products.map((p) => (
                    <div
                        key={p.id}
                        className="relative flex flex-col items-center border border-gray-200 rounded-lg px-3 py-2 min-w-[180px] bg-white"
                    >
                        <button
                            className="absolute top-2 right-2 text-gray-400 hover:text-red-500"
                            onClick={() => handleRemove(p.id)}
                        >
                            <FaTimes size={14} />
                        </button>
                        <img src={p.img} alt={p.name} className="w-16 h-20 object-cover rounded mb-1" />
                        <div className="text-xs text-gray-800 text-center">{p.name}</div>
                        {p.status ? (
                            <div className={`text-xs mt-1 ${p.statusClass}`}>{p.status}</div>
                        ) : (
                            <div className={`text-sm mt-1 ${p.priceClass}`}>{p.price}</div>
                        )}
                    </div>
                ))}
                {/* Nút điều hướng */}
                <button className="flex items-center justify-center w-12 h-12 ml-2 rounded-full border border-gray-200 bg-white shadow hover:bg-gray-100">
                    <span className="text-xl text-gray-500">{'>'}</span>
                </button>
            </div>
        </div>
    );
}