import { useState } from 'react'
import styles from './Calculator.module.css'

export default function Calculator() {
    const [input, setInput] = useState('');

    const handleClick = (value: string) => {
        if (value === 'C') {
            setInput('');
        } else if (value === '=') {
            try {
                const replaced = input.replace(/×/g, '*').replace(/÷/g, '/');
                const result = eval(replaced);
                setInput(result.toString());
            } catch (err) {
                setInput('Error');
            }
        } else {
            setInput((prev) => prev + value);
        }
    };

    const buttons = [
        '7', '8', '9', '÷',
        '4', '5', '6', '×',
        '1', '2', '3', '-',
        '0', '.', 'C', '+',
    ];

    return (
        <>
            <span className='text-2xl font-bold'>1. Build a Calculator with React + TypeScript</span>
            <div className={styles.calculator}>
                <input className={styles.display} type="text" value={input} readOnly />
                <div className={styles.grid}>
                    {buttons.map((btn) => (
                        <button
                            key={btn}
                            onClick={() => handleClick(btn)}
                            className={
                                btn === 'C'
                                    ? styles.clearButton
                                    : ['÷', '×', '-', '+'].includes(btn)
                                        ? styles.operatorButton
                                        : styles.numberButton
                            }
                        >
                            {btn}
                        </button>
                    ))}
                </div>
                <button
                    className={styles.equalButton}
                    onClick={() => handleClick('=')}
                >
                    =
                </button>
            </div>
        </>
    );
}