import CardBase from '../CardBase';
import styles from './ClubCard.module.css';

type Props = {
  clubName: string;
  logo: string;
};

const ClubCard = ({ clubName, logo }: Props) => {
  return (
    <CardBase>
      <div className={styles.container}>
        <img src={logo} alt={clubName} className={styles.logo} />
        <span className={styles.name}>{clubName}</span>
        <span className={styles.dots}>⋯</span>
      </div>
    </CardBase>
  );
}   

export default ClubCard;