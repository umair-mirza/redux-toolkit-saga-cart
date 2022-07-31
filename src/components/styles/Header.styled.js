import styled from "styled-components";

export const StyledHeader = styled.header`
    background: ${({theme}) => theme.colors.header};
    padding: 20px 0 5px 0;
`

export const Logo = styled.h1`
    color: #fff;
    font-weight: 600;
    font-size: 1.8rem;
`

export const Cart = styled.div`
    position: relative;
`

export const CartCounter = styled.div`
    position: absolute;
    top: -10px;
    right: -10px;
    background-color: #4B0082;
    border-radius: 50%;
    width: 25px;
    height: 25px;
    color: #fff;
    font-size: 0.90rem;
    display: flex;
    justify-content: center;
    align-items: center;
`