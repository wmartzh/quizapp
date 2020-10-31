import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    padding: string
    shadow: string
    borderRadius: string
    container: {
      width: string
    }
    common: {
      black: string
      white: string
    }
    text: {
      main: string
      error: string
      grey: string
    }
    primary: {
      main: string
      text: string
    }
    disable: {
      main: string
      text: string
    }
    accent: {
      main: string
      text: string
    }
    fontSize: string
    background: string
  }
}
