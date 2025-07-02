import { FaApple } from "react-icons/fa";
import styles from './ContinueWithAppleButton.module.css';

const ContinueWithAppleButton = () => {
    return (
        <button className={styles.button}>
            <FaApple size={21}/><span>Continue with Apple</span>
        </button>
    );
}

export default ContinueWithAppleButton;