import styled from 'styled-components'

type Props = {
  width?: string
  margin?: string
  fontSize?: string
  shadow?: boolean
  disable?: boolean
}

export const Button = styled.div<Props>`
  height 40px;
  width: ${props => props.width || '100%'};
  cursor: ${props => (props.disable ? 'cursor' : 'pointer')};
  border: 2px solid ${props =>
    props.disable ? props.theme.disable.main : props.theme.primary.main};
  border-radius: 6px;
  box-shadow: ${props => (props.shadow ? props.theme.shadow : undefined)};
  color: ${props =>
    props.disable ? props.theme.disable.main : props.theme.primary.main};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  margin: ${props => props.margin || '20px 0'};
  font-size: ${props => props.fontSize || props.theme.fontSize};
  font-weight: 600;

  transition: 0.3s;

  ${props =>
    !props.disable
      ? `
      &:hover {
        background: ${
          props.disable ? props.theme.disable.main : props.theme.primary.main
        };
        color: ${props.theme.primary.text};
      }
    `
      : undefined}
`
