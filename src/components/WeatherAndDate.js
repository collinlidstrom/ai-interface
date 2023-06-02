import React, {
    // useEffect,
    useState
} from "react";
import { Alert } from "@mui/material";

const WeatherAndDate = () => {
    // const [weather, setWeather] = useState(null);
    const date = useState(new Date().toLocaleDateString());

    // useEffect(() => {
    //     const fetchWeather = async () => {
    //         const response = await fetch(
    //             `http://api.openweathermap.org/data/2.5/weather?q=Chicago&units=imperial&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
    //         );
    //         const data = await response.json();
    //         setWeather(data);
    //     };
    //     // fetchWeather();
    // }, []);

    return (
        <div>
            <Alert variant="filled" severity="info">
                Today's Date: {date}
            </Alert>
            {/* {weather?.main && weather?.weather[0] && (
                <div>
                    <h2>Weather in Chicago:</h2>
                    <p>Temperature: {weather.main.temp}°F</p>
                    <p>Humidity: {weather.main.humidity}%</p>
                    <p>Weather Condition: {weather.weather[0].description}</p>
                </div>
            )} */}
            <br/>
        </div>
    );
};

export default WeatherAndDate;