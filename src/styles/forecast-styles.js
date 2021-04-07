import styled from "styled-components";

 export const AllForecasts = styled.div` 
    margin: 40px 100px;
    border-radius: 20px;
    display: flex;
    justify-content: space-between;
    color: rgba(0, 0, 0, 0.62);
    background: rgba(250, 237, 235, 0.6);

   @media screen and (max-width: 480px) {
    margin: 20px 10px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
   }
    `

 export const SingleForecast = styled.h2`
    margin: 15px;
    font-size: 1.5em;
    font-weight: bold;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 30px 30px;
    background-color: grey;
    border-radius: 20px;
    text-align: center;
    `

   export const DetailsButton = styled.button`
   border-color: rgba(206, 121, 107, 1);
   background: rgba(206, 121, 107, 1);
   margin-top: 10px;
   font-size: 15px;
   border-radius: 10px;
   height: 30px;
   width: 100px;

   @media screen and (max-width: 480px) {
      font-size: 10px;
   }
`