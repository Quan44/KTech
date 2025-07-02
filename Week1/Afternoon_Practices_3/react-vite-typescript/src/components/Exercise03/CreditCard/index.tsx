import CardBase from '../CardBase';
import styles from './CreditCard.module.css';

type Props = {
    name: string;
    cardNumber: string;
    brand: string;
    avatar: string;
};

const CreditCard = ({ name, cardNumber, brand, avatar }: Props) => {
    return (
        <CardBase>
            <div className={styles.wrapper}>
                <img src={avatar} className={styles.avatar} alt="avatar" />
                <div className={styles.info}>
                    <div className={styles.name}>{name}</div>
                    <div className={styles.card}>
                        <span className={styles.brand}>{brand}</span> 
                        <p>{cardNumber} ••••</p>
                    </div>
                </div>
                <span className={styles.eye}>👁️</span>
            </div>
        </CardBase>
    );
}

export default CreditCard;