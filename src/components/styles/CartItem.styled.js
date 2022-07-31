import styled from "styled-components";

export const StyledCartItem = styled.div`
    display: flex;
    gap: 20px;
    align-items: center;
    height: 100px;
    max-height: 100%;
    overflow: hidden;
`

export const StyledMobile = styled.div`
    width: 70px;
    height: 100px;
    object-fit: contain;
    display: flex;
    align-items: center;
`

export const StyledDescription = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
`

export const StyledTitle = styled.div`
    font-size: 0.9rem;
    font-weight: 600;
`

export const StyledPrice = styled.div`
    font-size: 1rem;
    font-weight: 600;
    color: #515a5a;
    margin-top: 2px;
`

export const StyledRemove = styled.div`
    cursor: pointer;
    font-size: 0.8rem;
    color: #000080;
    margin-top: 5px;
`

export const StyledQuantity = styled.div`
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;
    height: 100px;
    max-height: 100%;
    font-size: 1.5rem;
    color: #515a5a;
`