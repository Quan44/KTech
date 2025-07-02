import styles from './Input.module.css'

type TInputProps = {
    label?: string;
    leftIcon?: React.ReactNode
    rightIcon?: React.ReactNode
    defaultValue?: string;
    type?: 'primary' | 'colorIcon' | 'colorPhone';
}

const Input = ({ label, leftIcon, rightIcon, defaultValue, type }: TInputProps) => {
    return (
        <div className={styles.inputWrapper}>
            {leftIcon && <span className={styles.leftIcon}>{leftIcon}</span>}
            <input
                defaultValue={defaultValue}
                type="text"
                className={styles.input}
                placeholder={label}
            />
            {rightIcon && <span className={`${styles.rightIcon} ${type === 'colorIcon' ? styles.colorIcon : ''} ${type === 'colorPhone' ? styles.colorPhone : ''}`}>{rightIcon}</span>}
        </div>
    );
}

export default Input;