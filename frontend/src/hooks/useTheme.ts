import { useState } from 'react'
import { globalThemeConfig } from '../assets/globalThemeConfigType'

export const useTheme = () => {
  const [currentColor, setCurrentColor] = useState<string>('#333333')
  const colors = globalThemeConfig(false)

  return {
    colors,
    currentColor,
    setCurrentColor
  }
}
