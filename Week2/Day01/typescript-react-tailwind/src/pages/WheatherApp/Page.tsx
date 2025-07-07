import HourlyForecast from "@/components/HourlyForecast";
import SearchBar from "@/components/SearchBar";
import WeatherCard from "@/components/WeatherCard";
import { ForecastData } from "@/types/Weather";
import { FC, useEffect, useState } from "react";
import styles from './WheatherApp.module.css'

const API_KEY = 'c9a0ca46550648b29ce125849232709';

const WheatherApp: FC = () => {

    const [data, setData] = useState<ForecastData | null>(null);
    const [location, setLocation] = useState('Ha Noi');
    const [input, setInput] = useState('Ha Noi');

    const fetchWeather = (loc: string) => {
        setData(null);
        fetch(
            `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${encodeURIComponent(loc)}&days=1&aqi=no&alerts=no&lang=vi`
        )
            .then(res => res.json())
            .then(setData);
    };

    useEffect(() => {
        document.title = 'Wheather App';
        fetchWeather(location);
        // eslint-disable-next-line
    }, [location]);

    if (!data) return <div className={styles.loading}>Loading...</div>;

    return (
        <>
            <section>
                <div className={styles.container}>
                    <SearchBar
                        value={input}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInput(e.target.value)}
                        onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
                            if (e.key === 'Enter') setLocation(input);
                        }}
                    />
                    <WeatherCard data={data.current} />
                    <HourlyForecast hours={data.forecast.forecastday[0].hour} />
                </div>
            </section>
        </>
    );
};

export default WheatherApp;
