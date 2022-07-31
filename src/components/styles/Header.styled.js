import styled from "styled-components";

export const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    background: ${({theme}) => theme.colors.header}
`