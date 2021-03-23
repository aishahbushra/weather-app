import React, {useState, useEffect } from 'react';
import LocationDetails from './location-details';
import ForecastSummaries from './forecast-summaries';
import ForecastDetails from './forecast-details';
import getForecast from "./getForecast";

import '../styles/app.css';


const App = (props) => {
    const [location, setLocation] = useState({city: "", country: ""});
    const [selectedDate, setSelectedDate] = useState(0);
    const [forecasts, setForecasts] = useState([])

    const selectedForecast = forecasts.find(forecast => forecast.date === selectedDate);

    const handleForecastSelect = (date) => {
        setSelectedDate(date);
    };


  useEffect(() => {
    getForecast(setSelectedDate, setForecasts, setLocation);
  }, []);

return (
    <div className="forecast">
 < LocationDetails
 city = {location.city}
 country = {location.country}/>

 <ForecastSummaries
 forecasts = {forecasts}
 onForecastSelect = {handleForecastSelect}/>

{selectedForecast && <ForecastDetails forecast = {selectedForecast}/>}

 </div>
);

}


export default App;