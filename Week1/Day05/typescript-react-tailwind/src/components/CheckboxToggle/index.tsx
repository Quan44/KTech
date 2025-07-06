import { useState } from "react";

export default function CheckboxToggle() {
    const [checked, setChecked] = useState(false);

    const handleToggle = () => {
        setChecked((prev) => !prev);
    };

    return (
        <div className="flex flex-col bg-base-200 w-[300px] gap-5">
            <span className="font-bold">Exercise 9: Checkbox Toggle</span>
            <label className="flex items-center cursor-pointer">
                <input
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-blue-600"
                    checked={checked}
                    onChange={handleToggle}
                />
                <span className="ml-2 text-sm font-medium">
                    {checked ? "Checked" : "Unchecked"}
                </span>
            </label>
        </div>
    )
}