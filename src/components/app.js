import React, {useState, useEffect } from 'react';
import LocationDetails from './location-details';
import ForecastSummaries from './forecast-summaries';
import ForecastDetails from './forecast-details';
import getForecast from "./getForecast";
import SearchForm from './searchForm';

import '../styles/app.css';


const App = () => {
    const [location, setLocation] = useState({city: "", country: ""});
    const [selectedDate, setSelectedDate] = useState(0);
    const [forecasts, setForecasts] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
      getForecast(searchText, setSelectedDate, setForecasts, setLocation, setErrorMessage);
    }, []);

    const selectedForecast = forecasts.find(forecast => forecast.date === selectedDate);

    const handleForecastSelect = (date) => {
        setSelectedDate(date);

    };

    const handleCitySearch = () => {
        getForecast(searchText, setSelectedDate, setForecasts, setLocation, setErrorMessage);
        setSearchText("");
        };


return (
    <div className="forecast">

 < LocationDetails
 city = {location.city}
 country = {location.country}
 errorMessage = {errorMessage}
 />
      <SearchForm
       searchText={searchText}
       setSearchText={setSearchText}
       onSubmit={handleCitySearch}
      />
 
 {!errorMessage && (
        <>
          <ForecastSummaries
            forecasts={forecasts}
            onForecastSelect={handleForecastSelect}
          />
          {selectedForecast && <ForecastDetails forecast={selectedForecast} />}
        </>
      )}

 </div>
);

}


export default App;