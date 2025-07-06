import React from 'react'

export default function InputEventHandle() {
    const [text, setText] = React.useState('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value);
    };

    return (
        <div className='flex flex-col bg-base-200 w-[300px] gap-5'>
            <span className="font-bold">Exercise 2: Input Field Tracker</span>
            <label htmlFor="inputField" className='text-lg rounded-lg bg-gray-100 shadow-md w-42 h-auto p-2'>Type something:</label>
            <input className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition'
                id='inputField' type='text' value={text} onChange={handleChange} />
            <span className='bg-amber-50 rounded w-full h-auto p-2'>
                {text === '' ? "You typed: nothing" : text}
            </span>
        </div>
    )
}