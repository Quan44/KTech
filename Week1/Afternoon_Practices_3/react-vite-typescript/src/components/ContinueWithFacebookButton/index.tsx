import { FaFacebook } from "react-icons/fa";
import styles from './ContinueWithFacebookButton.module.css';

const ContinueWithFacebookButton = () => {
    return (
        <button className={styles.button}>
            <FaFacebook size={21}/><span>Continue with Facebook</span>
        </button>
    );
}

export default ContinueWithFacebookButton;