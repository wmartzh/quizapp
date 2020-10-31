import { DefaultTheme } from 'styled-components'

export const paletteColor = {
  black: '#333333',
  white: '#F6F6F6',
  yellow: '#FFDA63',
  red: '#FE5665',
  blue: '#1E365D',
  gray: '#C3C9D4'
}

export const globalThemeConfig = (darkMode: boolean = true): DefaultTheme => {
  return {
    padding: '18px',
    borderRadius: '7px',
    container: {
      width: '1120px'
    },
    common: {
      black: darkMode ? paletteColor.white : paletteColor.black,
      white: darkMode ? paletteColor.black : paletteColor.white
    },
    text: {
      main: darkMode ? paletteColor.white : paletteColor.black,
      error: paletteColor.red,
      grey: paletteColor.gray
    },
    primary: {
      main: paletteColor.yellow,
      text: paletteColor.white
    },
    disable: {
      main: '',
      text: ''
    },
    accent: {
      main: '',
      text: ''
    },
    fontSize: '16px',
    background: darkMode ? paletteColor.white : paletteColor.black
  }
}
