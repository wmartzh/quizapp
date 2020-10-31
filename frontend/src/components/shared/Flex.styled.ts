import styled from 'styled-components'

type FlexProps = {
  flexFlow?: 'column' | 'row'
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
}

export const Flex = styled.div<FlexProps>`
  display: flex;
  flex-flow: ${props => props.flexFlow};
  justify-content: ${props => props.justifyContent};
`
