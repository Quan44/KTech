import styles from './TransactionCard.module.css';

type Props = {
    logo: string;
    title: string;
    subtitle: string;
    time: string;
    amount: string;
};

const TransactionCard = ({ logo, title, subtitle, time, amount }: Props) => {

    return (
        <div className={styles.card}>
            <img src={logo} alt="logo" className={styles.logo} />
            <div className={styles.info}>
                <div className={styles.title}>{title}</div>
                <div className={styles.subtitle}>{subtitle}</div>
            </div>
            <div className={styles.amountBlock}>
                <div className={styles.amount}>{amount}</div>
                <div className={styles.time}>{time}</div>
            </div>
        </div>
    );
}

export default TransactionCard;