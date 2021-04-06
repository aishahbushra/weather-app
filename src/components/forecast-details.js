import React from "react";
import PropTypes from "prop-types";
import Moment from "moment";
import WeatherIcon from "react-icons-weather";
import {DetailContainer, DetailInfo} from "../styles/forecast-details-style";

const ForecastDetails = ({ forecast }) => {
  const { 
    date, 
    icon, 
    temperature, 
    wind, 
    humidity } = forecast;

  return (
    <DetailContainer>
      <DetailInfo>
    <h3>Details:</h3>
      <div className="main-date">{Moment(date).format("ddd Do MMM")}</div>
      <br />
      <div className="main-icon" data-testid="test-icon">
        {<WeatherIcon name="owm" iconId={icon} />}
      </div>

      <div className="max-temperature">Maximum Temperature: {temperature.max}&deg;c</div>
      <br />
      <div className="min-temperature">Minimum Temperature: {temperature.min}&deg;c</div>
      <br />
      <div className="big-humidity">Humidity: {humidity}%</div>
      <br />
      <div className="wind-speed">
        Wind: {wind.speed}mph {<i className={"windy"} />}
      </div>
      </DetailInfo>
    </DetailContainer>
  );
};

ForecastDetails.propTypes = {
  forecast: PropTypes.object.isRequired,
};

export default ForecastDetails;