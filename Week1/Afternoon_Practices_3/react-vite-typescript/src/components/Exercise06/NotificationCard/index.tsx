import styles from './NotificationCard.module.css';

type Props = {
  message: string;
  icon: React.ReactNode;
  badgeCount: number;
};

const NotificationCard = ({ message, icon, badgeCount }: Props) => {
  return (
    <div className={styles.card}>
      <div className={styles.message}>{message}</div>
      <div className={styles.rightSide}>
        <div className={styles.devide}></div>
        <span className={styles.icon}>{icon}</span>
        <div className={styles.badge}>{badgeCount}</div>
      </div>
    </div>
  );
}

export default NotificationCard;