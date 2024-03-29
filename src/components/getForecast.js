import axios from "axios";

const getForecast = (
    searchText,
    setSelectedDate,
    setForecasts,
    setLocation,
    setErrorMessage
      ) => {
        setErrorMessage("");

        let endpoint = "https://mcr-codes-weather-app.herokuapp.com/forecast";

        if (searchText) {
          endpoint += `?city=${searchText}`;
        }
        return axios
          .get(endpoint)
          .then((response) => {
            setSelectedDate(response.data.forecasts[0].date);
            setForecasts(response.data.forecasts);
            setLocation(response.data.location);
          })
          .catch((error) => {
            const { status } = error.response;
            if (status === 404) {
              setErrorMessage("That place doesn't exist! Please try again.");
              console.error("Location is not valid", error);
            }
            if (status === 500) {
              setErrorMessage("Server error, try again later.");
              console.error("Server error", error);
            }
          });
      };

export default getForecast;
