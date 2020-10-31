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
    shadow:
      'box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 0px 1px rgba(0, 0, 0, 0.04)',
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
