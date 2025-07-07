import React from 'react';
import styles from './HourlyForecast.module.css';
import { HourForecast } from '../../types/Weather';

interface Props {
    hours: HourForecast[];
}

const HourlyForecast: React.FC<Props> = ({ hours }) => {
    // Lấy giờ hiện tại theo API (UTC+7)
    const now = new Date();
    const currentHour = now.getHours();

    // Tìm index giờ hiện tại trong mảng hour
    const startIdx = hours.findIndex(h => {
        const hHour = new Date(h.time).getHours();
        return hHour === currentHour;
    });

    // Nếu không tìm thấy thì lấy từ đầu
    const idx = startIdx === -1 ? 0 : startIdx;
    // Lấy 8 giờ liên tiếp, nếu vượt quá thì cắt ở cuối mảng
    const displayHours = hours.slice(idx, idx + 8);

    return (
        <div className={styles.card}>
            <div className={styles.title}>Now</div>
            <div className={styles.hourly}>
                {displayHours.map((hour, i) => {
                    const time = new Date(hour.time).getHours();
                    return (
                        <div className={styles.hour} key={i}>
                            <img className={styles.icon} src={hour.condition.icon} alt="" />
                            <div className={styles.temp}>{Math.round(hour.temp_c)}°</div>
                            <div className={styles.time}>
                                {i === 0 ? 'Now' : `${time.toString().padStart(2, '0')}:00`}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default HourlyForecast;