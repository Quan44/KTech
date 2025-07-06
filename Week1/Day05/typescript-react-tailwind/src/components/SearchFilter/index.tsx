import React from "react";

const items = ["Apple", "Banana", "Orange", "Grapes", "Pineapple"];

export default function SearchFilter() {
    const [searchTerm, setSearchTerm] = React.useState("");

    const filteredItems = items.filter(item =>
        item.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="flex flex-col bg-base-200 w-[300px] gap-5">
            <span className="font-bold">Exercise 10: SearchFilter</span>
            <input
                type="text"
                className="border rounded px-3 py-2"
                placeholder="Search fruits..."
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
            />
            <ul className="list-disc ml-5">
                {filteredItems.length > 0 ? (
                    filteredItems.map(item => <li key={item}>{item}</li>)
                ) : (
                    <li className="text-gray-400">No results found</li>
                )}
            </ul>
        </div>
    )
}