import CardBase from '../CardBase';
import styles from './DashboardCard.module.css';

type Props = {
    title: string;
    subtitle: string;
    progress: number;
};

const DashboardCard = ({ title, subtitle, progress }: Props) => {
    return (
        <CardBase>
            <div className={styles.tags}>
                <div style={{ display: "flex", gap: "10px" }}>
                    <span className={styles.highlight}>Highlight</span>
                    <span className={styles.feeds}>Feeds</span>
                </div>
                <span className={styles.dots}>⋯</span>
            </div>
            <div className={styles.title}>{title}</div>
            <div className={styles.subtitle}>{subtitle}</div>
            <div className={styles.progressWrapper}>
                <div className={styles.progressBar}>
                    <div className={styles.progress} style={{ width: `${progress}%` }} />
                </div>
                <div className={styles.percent}>{progress}%</div>
            </div>
        </CardBase>
    );
}

export default DashboardCard;