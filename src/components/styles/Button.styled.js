import styled from "styled-components";

export const StyledButton = styled.button`
    padding: 5px 10px;
    background-color: transparent;
    border-radius: 5px;
    border: 2px solid;
    border-color: ${({color}) => color};
    letter-spacing: 3px;
    text-transform: uppercase;
    font-size: 1rem;
    font-weight: 400;
    color: ${({color}) => color};
    transition: all 0.3s;
    cursor: pointer;

    &:hover {
        background-color: ${({color}) => color};
        color: #fff;
    }
`