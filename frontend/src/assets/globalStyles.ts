import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', 'Sans Serif';
  }
  body {
    #root {
      min-height: 100vh;
    }
    background: ${props => props.theme.primary.main};
  }
`
