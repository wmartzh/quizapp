import React, { createContext } from 'react'
import { ThemeProvider as ThemeProviderStyled } from 'styled-components'
import { useTheme } from '../hooks'

interface ThemeContextI {
  currentColor: string
}

const ThemeContext = createContext<ThemeContextI | null>(null)

export const ThemeProvider: React.FC = ({ children }) => {
  const { colors, currentColor } = useTheme()

  return (
    <ThemeContext.Provider value={{ currentColor }}>
      <ThemeProviderStyled theme={colors}>{children}</ThemeProviderStyled>
    </ThemeContext.Provider>
  )
}
