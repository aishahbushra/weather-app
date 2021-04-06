import React from 'react';
import ForecastSummary from './forecast-summary';
import PropTypes from "prop-types";
import {AllForecasts} from "../styles/forecast-styles";

import '../styles/forecast-styles.js';

const ForecastSummaries = props => (
    <AllForecasts>
        {
            props.forecasts.map(forecast => (
                <ForecastSummary
                onSelect={props.onForecastSelect}
                key={forecast.date}
                date={forecast.date}
                description={forecast.description}
                icon={forecast.icon.toString()}
                temperature={forecast.temperature.max}
                />
            ))
        }
    </AllForecasts>
);

ForecastSummaries.propTypes = {
    date: PropTypes.number,
    description: PropTypes.string,
    icon: PropTypes.number,
    temperature: PropTypes.number,
};

export default ForecastSummaries;