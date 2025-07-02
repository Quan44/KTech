import CardBase from '../CardBase';
import styles from './ProfileCard02.module.css';

type Props = {
    name: string;
    image: string;
    icon?: React.ReactNode;
};

const ProfileCard02 = ({ name, image, icon }: Props) => {
    return (
        <CardBase className={styles.card}>
            <div className={styles.wrapper}>
                <img src={image} className={styles.image} alt={name} />
                <div className={styles.content}>
                    <span className={styles.name2}>{name}</span>
                    {icon && <span className="icon">{icon}</span>}
                </div>
            </div>
        </CardBase>
    );
}

export default ProfileCard02;