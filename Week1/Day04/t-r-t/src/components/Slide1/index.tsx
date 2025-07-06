import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const images = [
    {
        src: "/assets/images/deal/1.jpg",
        alt: "Máy giặt LG",
    },
    {
        src: "/assets/images/deal/2.jpg",
        alt: "Loa",
    },
    {
        src: "/assets/images/deal/3.jpg",
        alt: "Camera",
    },
    {
        src: "/assets/images/deal/4.jpg",
        alt: "Sách",
    },
    {
        src: "/assets/images/deal/5.jpg",
        alt: "Tai nghe",
    },
];

export default function Slide1() {
    const [current, setCurrent] = useState(0);

    const prevImage = () => {
        setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const nextImage = () => {
        setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    const selectImage = (idx: number) => setCurrent(idx);

    return (
        <div className="flex flex-col items-center justify-center min-h-[500px]">
            <div className="relative flex items-center justify-center h-[340px]">
                <button
                    className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-200 rounded px-3 py-4 hover:bg-gray-300 transition"
                    onClick={prevImage}
                >
                    <FaChevronLeft size={20} />
                </button>
                <img
                    src={images[current].src}
                    alt={images[current].alt}
                    className="w-[300px] h-[340px] object-contain mx-8"
                />
                <button
                    className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-200 rounded px-3 py-4 hover:bg-gray-300 transition"
                    onClick={nextImage}
                >
                    <FaChevronRight size={20} />
                </button>
            </div>
            <div className="flex gap-4 mt-8">
                {images.map((img, idx) => (
                    <button
                        key={img.src}
                        onClick={() => selectImage(idx)}
                        className={`border rounded p-1 bg-white transition
                            ${current === idx ? "border-orange-500" : "border-gray-200"}
                        `}
                    >
                        <img
                            src={img.src}
                            alt={img.alt}
                            className={`w-16 h-16 object-contain ${current === idx ? "" : "opacity-70"}`}
                        />
                    </button>
                ))}
            </div>
        </div>
    );
}