import CardBase from '../CardBase';
import styles from './ProfileCard01.module.css';

type Props = {
    name: string;
    subtitle: string;
    avatar: string;
    icon?: React.ReactNode;
};

const ProfileCard01 = ({ name, subtitle, avatar, icon }: Props) => {
    return (
        <CardBase>
            <div className={styles.wrapper}>
                <img src={avatar} className={styles.avatar} alt={name} />
                <div className={styles.info}>
                    <div className={styles.name}>{name}</div>
                    <div className={styles.subtitle}>{subtitle}</div>
                </div>
                {icon && <span className="icon">{icon}</span>}
            </div>
        </CardBase>
    );
}

export default ProfileCard01;