import styled from "styled-components";

export const StyledModal = styled.div`
    background-color: #fff;
    margin: 0 auto;
    display: block;
    padding: 15px 20px;
    border-radius: 5px;
    box-shadow: 0 0 0 5px #ccc;
    
    position: absolute;
    width: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    p {
        color: #000;
    }
`

export const StyledInModal = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 5px;
    font-size: 1rem;
    font-weight: 700;
`