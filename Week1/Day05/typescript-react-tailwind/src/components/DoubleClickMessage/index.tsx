import { useState } from "react";

export default function DoubleClickMessage() {
    const [showMessage, setShowMessage] = useState(false);

    const handleDoubleClick = () => {
        setShowMessage(true);
        setTimeout(() => setShowMessage(false), 2000);
    };

    return (
        <div className="flex flex-col bg-base-200 w-full gap-5">
            <span className="font-bold">Exercise 7: Double Click Message</span>
            <div>
                <button
                    className="text-sm font-bold w-[150px] px-4 py-2 rounded-lg bg-blue-500 text-white shadow-md cursor-pointer hover:bg-blue-600 hover:scale-105 transition-all duration-300"
                    onDoubleClick={handleDoubleClick}
                >
                    Double Click Me!
                </button>
                {showMessage && <span className="text-green-500 bg-blue-100 p-2 rounded ml-5">You double-clicked the button!</span>}
            </div>
        </div>
    )
}