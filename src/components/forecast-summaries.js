import React from 'react';
import ForecastSummary from './forecast-summary';
import PropTypes from "prop-types";

import '../styles/forecast-summaries.css';

const ForecastSummaries = props => (
    <div className="forecast-summaries">
        {
            props.forecasts.map(forecast => (
                <ForecastSummary
                onSelect={props.onForecastSelect}
                key={forecast.date}
                date={forecast.date}
                description={forecast.description}
                icon={forecast.icon}
                temperature={forecast.temperature.max}
                />
            ))
        }
    </div>
);

ForecastSummaries.propTypes = {
    date: PropTypes.number,
    description: PropTypes.string,
    icon: PropTypes.number,
    temperature: PropTypes.number,
};

export default ForecastSummaries;