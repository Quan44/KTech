import { useState } from "react";

export default function DropdownSelection() {
    const [selectedOption, setSelectedOption] = useState("");

    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedOption(event.target.value);
    };

    return (
        <div className="flex flex-col bg-base-200 w-full gap-5">
            <span className="font-bold">Exercise 8: Dropdown Selection</span>
            <div className="flex flex-col gap-2">
                <label className="font-bold mb-2">Choose a fruit:</label>
                <select
                    className="border w-[300px] rounded px-3 py-2"
                    value={selectedOption}
                    onChange={handleSelectChange}
                >
                    <option value="">--Choose a fruit--</option>
                    <option>Apple</option>
                    <option>Banana</option>
                    <option>Orange</option>
                </select>
                <span>Selected fruit: {selectedOption}</span>
            </div>
        </div>
    )
}