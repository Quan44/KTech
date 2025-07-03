import { useState } from "react";

const tabs = [
    { label: "HISTORY", content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores." },
    { label: "APPROACH", content: "Contenido de tabNeque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?" },
    { label: "CULTURE", content: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est." },
    { label: "METHOD", content: "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae." },
];

export default function ButtonTab() {
    const [activeTop, setActiveTop] = useState(0);
    const [activeBottom, setActiveBottom] = useState(0);

    return (
        <div className="flex flex-col items-center w-full">
            {/* Tabs trên */}
            <div className="flex w-[500px] bg-gray-100 rounded-t">
                {tabs.map((tab, idx) => (
                    <button
                        key={tab.label}
                        onClick={() => setActiveTop(idx)}
                        className={`flex-1 py-3 text-base font-medium transition 
              ${activeTop === idx
                                ? "bg-green-500 text-white rounded-t"
                                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                            }`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            <div className="w-[700px] text-center py-8 text-gray-700">
                {tabs[activeTop].content}
            </div>

            {/* Tabs dưới */}
            <div className="w-full flex justify-center border-b border-gray-200">
                <div className="flex w-[500px]">
                    {tabs.map((tab, idx) => (
                        <button
                            key={tab.label + "_underline"}
                            onClick={() => setActiveBottom(idx)}
                            className={`flex-1 py-2 text-base font-medium transition border-b-2
                ${activeBottom === idx
                                    ? "text-green-500 border-green-400"
                                    : "text-gray-700 border-transparent hover:text-green-500"
                                }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>
            </div>
            <div className="w-[700px] text-center py-8 text-gray-700">
                {tabs[activeBottom].content}
            </div>
        </div>
    );
}