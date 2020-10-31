import styled from 'styled-components'

interface Props {
  shadow?: boolean
  padding?: string
}

export const Card = styled.div<Props>`
  background: ${props => props.theme.common.white};
  padding: ${props => props.padding || props.theme.padding};
  border-radius: 6px;
  box-shadow: ${props => (props.shadow ? props.theme.shadow : undefined)};
`
