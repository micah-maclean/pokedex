import styled from "styled-components";

interface Props {
    backgroundColor?: string,
    color?: string,
    justifyContent?: string,
    maxWidth?: string 
    margin?: string,
    padding?: string
}

export const Container = styled.div<Props>`
    display: flex;
    width: 100%;
    justify-content: ${props => props.justifyContent && props.justifyContent};
    color: ${props => props.color ? props.color : 'inherit' };
    max-width: ${props => props.maxWidth && props.maxWidth};
    background-color: ${props => props.backgroundColor && props.backgroundColor};
    margin: ${props => props.margin ? props.margin : 0};
    padding: ${props => props.padding ? props.padding : 0};
`