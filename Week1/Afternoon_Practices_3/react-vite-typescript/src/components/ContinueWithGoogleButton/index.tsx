import { FaGoogle } from "react-icons/fa";
import styles from './ContinueWithGoogleButton.module.css';

const ContinueWithGoogleButton = () => {
    return (
        <button className={styles.button}>
            <FaGoogle size={21}/><span>Continue with Google</span>
        </button>
    );
}

export default ContinueWithGoogleButton;