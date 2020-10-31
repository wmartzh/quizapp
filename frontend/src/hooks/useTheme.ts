import { useState } from 'react'
import {
  globalThemeConfig,
  paletteColor
} from '../assets/globalThemeConfigType'

export const useTheme = () => {
  const primaryColors = [
    paletteColor.red,
    paletteColor.blue,
    paletteColor.yellow
  ]
  const randomColor =
    primaryColors[Math.floor(Math.random() * primaryColors.length)]
  const [currentColor, setCurrentColor] = useState<string>(randomColor)

  const colors = globalThemeConfig(currentColor)

  return {
    colors,
    currentColor,
    setCurrentColor
  }
}
