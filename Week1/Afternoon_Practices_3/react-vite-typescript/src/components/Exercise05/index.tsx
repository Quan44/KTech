import styles from './OvalCard.module.css';

type Props = {
    bgColor: string;
    title: string;
    subtitle?: string;
    avatars: string[];
    textColor?: string;
};

const OvalCard = ({ bgColor, title, subtitle, avatars, textColor = "#111" }: Props) => {
    return (
        <div className={styles.card} style={{ backgroundColor: bgColor }}>
            <div className={styles.avatarGroup}>
                {avatars.map((src, idx) => (
                    <img key={idx} src={src} alt={`avatar-${idx}`} className={styles.avatar} />
                ))}
            </div>
            <div className={styles.text}>
                <div className={styles.title} style={{ color: textColor }}>{title}</div>
                <div className={styles.subtitle} style={{ color: textColor }}>{subtitle}</div>
            </div>
        </div>
    );
}

export default OvalCard;