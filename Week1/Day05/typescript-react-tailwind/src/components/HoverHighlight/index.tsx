import { useState } from "react";

export default function HoverHighlight() {
    const [hovered, setHovered] = useState(false);

    const handleMouseEnter = () => {
        setHovered(true);
    }

    const handleMouseLeave = () => {
        setHovered(false);
    }

    return (
        <div className="flex flex-col bg-base-200 w-[300px] gap-5">
            <span className="font-bold">Exercise 4: Hover Highlight</span>
            <span>Hover over the button to see the effect.</span>
            <button
                className={`text-sm font-bold w-[150px] px-4 py-2 rounded-lg shadow-md cursor-pointer transition-all duration-300 
                    ${hovered ? 'bg-yellow-500 text-white' : 'bg-gray-300 text-black'}`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                Hover over me!
            </button>
        </div>
    )
}