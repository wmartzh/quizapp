import styled from 'styled-components'

type BoxProps = {
  width?: string
  height?: string
}

export const Box = styled.div<BoxProps>`
  width: ${props => props.width};
  height: ${props => props.height};
`
