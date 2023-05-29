import React, { useEffect, useState } from "react";

const WeatherAndDate = () => {
    const [weather, setWeather] = useState(null);
    const [date, setDate] = useState(new Date().toLocaleDateString());

    useEffect(() => {
        const fetchWeather = async () => {
              const response = await fetch(
                `http://api.openweathermap.org/data/2.5/weather?q=Chicago&units=imperial&appid=${process.env.OPEN_WEATHER_MAP_AI_API_KEY}`
              );
            const data = await response.json();
            setWeather(data);
        };
        fetchWeather();
    }, []);

    return (
        <div>
            <h1>Today's date: {date}</h1>
            {weather && (
                <div>
                    <h2>Weather in Chicago:</h2>
                    <p>Temperature: {weather.main.temp}°F</p>
                    <p>Humidity: {weather.main.humidity}%</p>
                    <p>Weather Condition: {weather.weather[0].description}</p>
                </div>
            )}
        </div>
    );
};

export default WeatherAndDate;