import CardBase from '../CardBase';
import styles from './MatchCard.module.css';

type Props = {
  time: string;
  teamA: string;
  teamB: string;
  flagA: string;
  flagB: string;
};

const MatchCard = ({ time, teamA, teamB, flagA, flagB }: Props) => {
    return (
        <CardBase>
            <div className={styles.topRow}>
                <span className={styles.time}>{time}</span>
                <span className={styles.dots}>⋯</span>
            </div>
            <div className={styles.matchRow}>
                <div className={styles.team}>
                    <img src={flagA} alt="" className={styles.flag} />
                    <span>{teamA}</span>
                </div>
                <div className={styles.score}>0 : 0</div>
                <div className={styles.team}>
                    <img src={flagB} alt="" className={styles.flag} />
                    <span>{teamB}</span>
                </div>
            </div>
        </CardBase>
    );
}

export default MatchCard;