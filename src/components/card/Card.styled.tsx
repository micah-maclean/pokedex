import styled from "styled-components";

export const CardStyle = styled.li`
    cursor: pointer; 
    width: 100%;
    aspect-ratio: 1;
    border-radius: 8px;
    padding: 16px;
    background-color: ${props => props.theme.color.backgroundColor};
    border: 1px solid ${props => props.theme.color.borderColor};

    :hover{
        box-shadow: ${props => props.theme.boxShadow};
        transition: box-shadow 0.3s ease-in-out;
    }

    img {
        border-radius: 8px;
        /* background-color: #ECECEC; */
        padding: 16px;
        width: 100%;
        height: auto;
    }

    
`

export const PokemonInfo = styled.div`
    padding-left: 16px;
    
    h3{
        padding: 8px 0;
        color: ${props => props.theme.color.textColor};
    }
    
    p {
        color: #919191;
    }
`