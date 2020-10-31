import styled from 'styled-components'

type ContainerProps = {
  width?: string
  padding?: string
}

export const Container = styled.div<ContainerProps>`
  margin: 0 auto;
  max-width: ${props => props.width || props.theme.container.width};
  padding: 0 ${props => props.padding || props.theme.padding};
  position: relative;
`
