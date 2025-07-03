import React from 'react';

const colors = [
  { label: "Đen", value: "black" },
  { label: "Hồng", value: "pink" },
  { label: "Xanh", value: "blue" },
];

export default function ColorSelect() {
  const [selected, setSelected] = React.useState("black");

  return (
    <>
      {/* Color selection */}
      <div className="flex items-center gap-2">
        <span className="text-sm text-gray-700">Màu:</span>
        {colors.map((color) => (
          <button
            key={color.value}
            className={`relative px-4 py-1 border text-sm rounded transition-all duration-150
            ${selected === color.value
                ? "border-orange-500 text-orange-500 bg-white font-semibold"
                : "border-gray-300 text-gray-700 bg-white"}
            `}
            onClick={() => setSelected(color.value)}
          >
            {color.label}
          </button>
        ))}
      </div>
    </>
  );
}