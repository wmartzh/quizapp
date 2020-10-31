import styled from 'styled-components'

type Props = {
  minmax?: string
  gridGap?: string
}

export const Grid = styled.div<Props>`
  display: grid;
  grid-gap: ${props => props.gridGap || '40px'};
  grid-template-columns: repeat(
    auto-fit,
    minmax(${props => props.minmax || '250px'}, 1fr)
  );
`
