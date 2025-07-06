import { useState } from "react";

export default function ToggleSwitch() {
    const [isOn, setIsOn] = useState(false);

    const handleToggle = () => {
        setIsOn((prev) => !prev);
    }

    return (
        <div className="flex flex-col bg-base-200 w-[300px] gap-5">
            <span className="font-bold">Exercise 3: Toggle Switch</span>
            <button
                className="text-sm font-bold w-[150px] px-4 py-2 rounded-lg bg-blue-500 text-white shadow-md cursor-pointer hover:bg-blue-600 hover:scale-105 transition-all duration-300"
                onClick={handleToggle}
            >
                {isOn ? "Turn OFF" : "Turn ON"}
            </button>
            <span>State: {isOn ? "ON" : "OFF"}</span>
        </div>
    );
}