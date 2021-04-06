import styled from "styled-components";

export const SearchContainer = styled.div`
margin-left: 800px;
margin-bottom: 50px;
display: flex;
flex-direction: column;
text-align: center;

@media screen and (max-width: 480px) {
    margin: 0px;
    padding-top: 15px;
   }
`
export const Input = styled.input`
margin-top: 0px;
margin-bottom: 30px;
border-color: rgba(0, 0, 0, 0.62);
background: rgba(0, 0, 0, 0.1);
font-size: 1em;
height: 30px;
width: 300px;
border-radius: 10px;

@media screen and (max-width: 480px) {
    margin-bottom: 15px;
   }
`

export const Button = styled.button`
border-color: rgba(206, 121, 107, 1);
background: rgba(206, 121, 107, 1);
font-size: 1em;
border-radius: 10px;
height: 30px;
width: 100px;

`