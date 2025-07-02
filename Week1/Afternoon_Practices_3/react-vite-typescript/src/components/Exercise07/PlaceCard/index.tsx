import styles from './PlaceCard.module.css';

type Props = {
    image: string;
    title: string;
    subtitle?: string;
    rightImageSrc?: string;
    rightNode?: React.ReactNode;
    background?: string;
};

const PlaceCard = ({ image, title, subtitle, rightImageSrc, rightNode, background }: Props) => {
    return (
        <div className={styles.card} style={{ backgroundColor: background || 'white' }}>
            <img src={image} className={styles.avatar} />

            <div className={styles.center}>
                <div className={styles.title}>{title}</div>
                {subtitle && <div className={styles.subtitle}>{subtitle}</div>}
            </div>

            <div className={styles.right}>
                {rightImageSrc && <img src={rightImageSrc} className={styles.rightImage} />}
                {rightNode && <div className={styles.rightNode}>{rightNode}</div>}
            </div>
        </div>
    );
}

export default PlaceCard;