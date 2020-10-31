import styled from 'styled-components'

type FontProps = {
  fontSize?: string
  fontWeight?: string
  color?: string
  lineHeight?: string
  letterSpacing?: string
}

export const Font = styled.div<FontProps>`
  font-size: ${props => props.fontSize || '14px'};
  font-weight: ${props => props.fontWeight || 'normal'};
  color: ${props => props.color || props.theme.primary.main};
  line-height: ${props => props.lineHeight || '21px'};
  letter-spacing: ${props => props.letterSpacing || '0.01em'};
`
