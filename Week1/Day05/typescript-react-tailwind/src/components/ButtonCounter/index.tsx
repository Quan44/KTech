import React from 'react';

export default class Counter extends React.Component {
    state = { count: 0 };

    increment = () => this.setState({ count: this.state.count + 1 });

    render() {
        return (
            <div className='flex flex-col bg-base-200 w-full gap-5'>
                <span className="font-bold">Exercise 1: Button Click Counter</span>
                <button
                    onClick={this.increment}
                    className="text-sm font-bold w-[150px] px-4 py-2 rounded-lg bg-blue-500 text-white shadow-md cursor-pointer hover:bg-blue-600 hover:scale-105 transition-all duration-300"
                >
                    Click Me
                </button>
                <p className="mt-4 w-[150px] text-lg rounded-lg bg-gray-100 p-2 shadow-md">
                    Clicked: {this.state.count} times
                </p>
            </div>
        );
    }
}