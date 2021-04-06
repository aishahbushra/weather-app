import React from "react";
import PropTypes from "prop-types";
import {LineOne, LineTwo} from "../styles/location-details-style";

const LocationDetails = (props) => {
    const { city, country, errorMessage } = props;
    return errorMessage ? (
      <h2>{errorMessage}</h2>
    ) : (
        <>
      <LineOne className="location-details">{`WEATHER IN ${city.toUpperCase()}`}</LineOne>
      <LineTwo className="location-details-two">THIS WEEK </LineTwo>
      </>
    );
  };
  
  LocationDetails.defaultProps = {
    errorMessage: "",
  };
  
  LocationDetails.propTypes = {
    city: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    errorMessage: PropTypes.string,
  };
  
  export default LocationDetails;