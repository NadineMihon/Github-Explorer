import styled from "styled-components";

export const Button = styled.button `
    font-family: Raleway;
    font-size: 16px;
    max-width: 150px;
    width: 100%;
    font-weight: 500;
    border-radius: 20px;
    border: none;
    padding: 7px 14px;
    color: white;
    background-color: #000000ca;
    cursor: pointer;

    &:hover {
        background-color:#000000;
        font-weight: 600;
    }

    &:disabled {
        opacity: 0.5;
        cursor: default;

        &:hover {
           background-color:#000000ca;
           font-weight: 500; 
        }
    }
`