import styles from './SearchBar.module.css';
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ value, onChange, onKeyDown }: any) => (
    <div className={styles.wrapper}>
        <span className={styles.icon}><FaSearch /></span>
        <input
            className={styles.input}
            placeholder="Hanoi"
            value={value}
            onChange={onChange}
            onKeyDown={onKeyDown}
        />
    </div>
);

export default SearchBar;
