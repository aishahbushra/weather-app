import React from "react";
import PropTypes from "prop-types";
import WeatherIcon from 'react-icons-weather';

const ForecastSummary = (props) => {
    const {
    date,
    temperature,
    description,
    handleForecastSelect } = props;
    
    return (
      <h2>
        <div className="date" data-testid="date-id">
         <span>{date}</span>
        </div>
        <div className="temperature" data-testid="temperature-id">
         <span>{temperature}</span>
        </div>
        <div className="description" data-testid="description-id">
        <span>{description}</span>
        </div>
        <div className="icon" data-testid="icon-id">
        <span>  <WeatherIcon name="owm" iconId={props.icon} /> </span>
        </div>
        <button value={date} onClick={handleForecastSelect}>
          More Details
        </button>
      </h2>
    );
  };

ForecastSummary.propTypes = {
forecast: PropTypes.shape({
    date: PropTypes.string,
    temperature: PropTypes.string,
    description: PropTypes.string,
    icon: PropTypes.object,
}),
};

export default ForecastSummary;

