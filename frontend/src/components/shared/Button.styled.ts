import styled from 'styled-components'

type Props = {
  width?: string
  margin?: string
  fontSize?: string
  shadow?: boolean
}

export const Button = styled.div<Props>`
  height 40px;
  width: ${props => props.width || '100%'};
  border-color: ${props => props.theme.primary.main};
  border-radius: 6px;
  box-shadow: ${props => (props.shadow ? props.theme.shadow : undefined)};
  color: ${props => props.theme.primary.main};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  margin: ${props => props.margin || '20px 0'};
  font-size: ${props => props.fontSize || props.theme.fontSize}
`
