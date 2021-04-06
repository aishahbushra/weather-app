import React from "react";
import PropTypes from "prop-types";
import WeatherIcon from 'react-icons-weather';
import moment from "moment";
import {SingleForecast, DetailsButton} from "../styles/forecast-styles";


const ForecastSummary = (props) => {
    const {
    date,
    temperature,
    description, } = props;
    
    return (
      <SingleForecast>
        
        <div className="date" data-testid="date-id">
         <span>{moment(props.date).format('ddd Do MMM')}</span>
        </div>
        <div className="temperature" data-testid="temperature-id">
         <span>{temperature}&deg;c</span>
        </div>
        <div className="description" data-testid="description-id">
        <span>{description}</span>
        </div>
        <div className="icon" data-testid="icon-id">
        <span>  <WeatherIcon name="owm" iconId={props.icon} /> </span>
        </div>
        <DetailsButton onClick={() => props.onSelect(props.date)}>More details</DetailsButton>
    
      </SingleForecast>
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

