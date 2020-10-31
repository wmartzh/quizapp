import styled from 'styled-components'

type Props = {
  value: string
}

export const Margin = styled.div<Props>`
  margin: ${props => props.value};
`
