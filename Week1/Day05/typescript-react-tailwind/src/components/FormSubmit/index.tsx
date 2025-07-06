import { useState } from 'react'

export default function FormSubmit() {
    const [submitted, setSubmitted] = useState('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        submitted.trim() === '' ? alert("Please enter a name before submitting.") : alert("You submitted: " + submitted);
        setSubmitted('');
    }

    return (
        <div className='flex flex-col bg-base-200 w-[300px] gap-5'>
            <span className='font-bold'>Exercise 5: Form Submit</span>
            <span>Submit the form to see the effect.</span>
            <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
                <input
                    type="text"
                    value={submitted}
                    onChange={(e) => setSubmitted(e.target.value)}
                    placeholder="Enter your name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                />
                <button
                    type="submit"
                    className="text-sm font-bold w-[150px] px-4 py-2 rounded-lg bg-blue-500 text-white shadow-md cursor-pointer hover:bg-blue-600 hover:scale-105 transition-all duration-300"
                >
                    Submit
                </button>
            </form>
        </div>
    )
}