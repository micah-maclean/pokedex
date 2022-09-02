import styled from "styled-components";

export const Grid = styled.ul`
    display: grid;
    list-style: none;
    width: 100%;
    grid-template-columns: repeat(4, minmax(auto, 1fr));
    grid-template-rows: max-content;
    justify-items: center;
    gap: 1.5rem;

    @media (max-width: ${props => props.theme.breakpoints.lg}) {
        grid-template-columns: repeat(3, minmax(auto, 1fr));
    }

    @media (max-width: ${props => props.theme.breakpoints.md}) {
        grid-template-columns: repeat(2, minmax(auto, 1fr));
    }
`