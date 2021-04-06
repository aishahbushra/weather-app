import styled from "styled-components";

export const DetailContainer = styled.div`
display: block;
margin-left: auto;
margin-right: auto;
background: grey;
width: 400px;
border-radius: 20px;
color: rgba(0, 0, 0, 0.62);

@media screen and (max-width: 480px) {
    width: 340px;
}

`
export const DetailInfo = styled.div`
padding: 10px;
padding-bottom: 30px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`