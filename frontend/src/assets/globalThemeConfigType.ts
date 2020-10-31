import { DefaultTheme } from 'styled-components'

export const paletteColor = {
  black: '#333333',
  white: '#F6F6F6',
  yellow: '#8675a9',
  red: '#FE5665',
  blue: '#1E365D',
  gray: '#C3C9D4'
}

const textColor = (currentColor: string) =>
  currentColor === paletteColor.blue
    ? paletteColor.white
    : currentColor === paletteColor.yellow
    ? paletteColor.white
    : currentColor === paletteColor.red
    ? paletteColor.white
    : paletteColor.black

export const globalThemeConfig = (currentColor: string): DefaultTheme => {
  return {
    padding: '18px',
    shadow:
      '0px 10px 20px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 0px 1px rgba(0, 0, 0, 0.04)',
    borderRadius: '6px',
    container: {
      width: '1120px'
    },
    common: {
      black: paletteColor.black,
      white: paletteColor.white
    },
    text: {
      main: textColor(currentColor),
      error: paletteColor.red,
      grey: paletteColor.gray
    },
    primary: {
      main: currentColor || paletteColor.yellow,
      text: textColor(currentColor)
    },
    disable: {
      main: paletteColor.gray,
      text: ''
    },
    accent: {
      main: '',
      text: ''
    },
    fontSize: '16px',
    background: paletteColor.black
  }
}
