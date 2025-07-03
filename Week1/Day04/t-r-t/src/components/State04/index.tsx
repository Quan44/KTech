import { useState } from "react";

export default function State04() {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white w-[340px] h-[200px] rounded-xl shadow border border-gray-200 p-4 inline-block">
      <div className="flex gap-3 relative">
        <button
          className="px-4 py-1 rounded-full border border-gray-300 bg-white text-gray-700 text-sm font-medium flex items-center gap-1 shadow-sm hover:bg-gray-50 transition"
          type="button"
        >
          Bộ nhớ trong <span className="ml-1">&#9660;</span>
        </button>
        <div className="relative">
          <button
            className="px-4 py-1 rounded-full border border-gray-300 bg-white text-gray-700 text-sm font-medium flex items-center gap-1 shadow-sm hover:bg-gray-50 transition"
            onClick={() => setOpen((v) => !v)}
            type="button"
          >
            Sắp xếp <span className="ml-1">&#9660;</span>
          </button>
          {open && (
            <div className="absolute left-1/2 -translate-x-1/2 mt-2 min-w-[200px] bg-white rounded shadow-lg border border-gray-100 z-10">
              <ul className="py-2 px-3 text-sm text-gray-700">
                <li className="py-1 cursor-pointer hover:text-blue-600">
                  Sản phẩm nổi bật
                </li>
                <li className="py-1 cursor-pointer hover:text-blue-600">
                  Giá từ thấp đến cao
                </li>
                <li className="py-1 cursor-pointer hover:text-blue-600">
                  Giá từ cao đến thấp
                </li>
              </ul>
              <button
                className="absolute top-2 right-2 text-gray-400 hover:text-red-500"
                onClick={() => setOpen(false)}
                type="button"
              >
                x
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}