import React from 'react';
import styles from './WeatherCard.module.css';
import { CurrentWeather } from '../../types/Weather';

interface Props {
    data: CurrentWeather;
}

const WeatherCard: React.FC<Props> = ({ data }) => (
    <div className={styles.card}>
        <div className={styles.header}>
            <span className={styles.temp}>{Math.round(data.temp_c)}°</span>
            <img className={styles.icon} src={data.condition.icon} alt={data.condition.text} />
        </div>
        <div className={styles.condition}>{data.condition.text}</div>
        <div className={styles.infoBoxes}>
            <div className={styles.box}>
                <span className={styles.label}>Humidity</span>
                <span className={styles.value}>{data.humidity}%</span>
            </div>
            <div className={styles.divider} />
            <div className={styles.box}>
                <span className={styles.label}>Wind</span>
                <span className={styles.value}>
                    {data.wind_kph.toLocaleString('fr-FR', { minimumFractionDigits: 1, maximumFractionDigits: 1 })} km/h
                </span>
            </div>
        </div>
    </div>
);

export default WeatherCard;