import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root{
        color: ${props => props.theme.color.textColor};
        background-color: ${props => props.theme.color.body};  
    }    
   
   * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
`

export default GlobalStyle;