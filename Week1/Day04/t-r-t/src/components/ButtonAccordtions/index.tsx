import { useState } from "react";

const accordions = [
    {
        label: "HISTORY",
        content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores.",
    },
    {
        label: "APPROACH",
        content: "Contenido de tabNeque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?",
    },
    {
        label: "CULTURE",
        content: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
    },
    {
        label: "METHOD",
        content: "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.",
    },
];

export default function ButtonAccordtions() {
    // Statesingle accordion
    const [singleOpen, setSingleOpen] = useState(0);
    // State multi accordion
    const [multiOpen, setMultiOpen] = useState<number[]>([]);

    const handleSingle = (idx: number) => setSingleOpen(idx);

    const handleMulti = (idx: number) => {
        setMultiOpen((prev) =>
            prev.includes(idx)
                ? prev.filter((i) => i !== idx)
                : [...prev, idx]
        );
    };

    return (
        <div className="flex gap-8 w-full justify-center">
            {/* Single Accordion */}
            <div className="w-[48%]">
                <div className="mb-2 font-medium">Single Accordtions</div>
                <div className="bg-white rounded">
                    {accordions.map((item, idx) => (
                        <div key={item.label} className="mb-3 last:mb-0">
                            <button
                                className={`w-full text-left px-4 py-3 font-bold text-base uppercase transition rounded-t
                  ${singleOpen === idx
                                        ? "bg-green-500 text-white"
                                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                                    }`}
                                onClick={() => handleSingle(idx)}
                                style={{ borderWidth: "0.5px" }}
                            >
                                {item.label}
                            </button>
                            {singleOpen === idx && (
                                <div
                                    className="px-6 py-5 text-center text-gray-700 border border-indigo-100 bg-white rounded"
                                    style={{ borderWidth: "0.5px" }}
                                >
                                    {item.content}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
            {/* Multi Accordion */}
            <div className="w-[48%]">
                <div className="mb-2 font-medium">Multi Accordtions</div>
                <div className="bg-white rounded">
                    {accordions.map((item, idx) => (
                        <div key={item.label} className="mb-3 last:mb-0">
                            <button
                                className={`w-full text-left px-4 py-3 font-bold text-base uppercase transition rounded-t
                  ${multiOpen.includes(idx)
                                        ? "bg-green-500 text-white"
                                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                                    }`}
                                onClick={() => handleMulti(idx)}
                                style={{ borderWidth: "0.5px" }}
                            >
                                {item.label}
                            </button>
                            {multiOpen.includes(idx) && (
                                <div
                                    className="px-6 py-5 text-center text-gray-700 border border-indigo-100 bg-white rounded"
                                    style={{ borderWidth: "0.5px" }}
                                >
                                    {item.content}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}