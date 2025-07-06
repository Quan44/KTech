import React from 'react'

export default function KeyPressDisplay() {
    const [lastKey, setLastKey] = React.useState<string>("");

    const handleKeyPress = (event: React.KeyboardEvent) => {
        setLastKey(event.key);
    };

    return (
        <div className='flex flex-col bg-base-200 w-[300px] gap-5'>
            <span className="font-bold">Exercise 6: Key Press Display</span>
            <input
                // value={lastKey}
                type="text"
                className="border rounded px-3 py-2"
                onKeyDown={handleKeyPress}
                placeholder="Type something..."
            />
            <p>Last key: {lastKey}</p>
        </div>
    )
}