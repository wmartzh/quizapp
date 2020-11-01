import styled from 'styled-components'

export const AnswerContainer = styled.div`
  border-radius: 26px;
  background: #dfdfdf;
  padding: 8px 16px;
  display: flex;
  flex-flow: row;
  margin: 8px 0;

  svg {
    stroke: ${props => props.theme.primary.main};
    cursor: pointer;
  }
`

export const InputAnswer = styled.input`
  font-size: 14px;
  border: none;
  background: none;
  margin-top: 10px;
  color: ${props => props.theme.primary.main};
  outline: none;
  padding: 2px 14px;
  width: 100%;
  font-size: 16px;
  font-weight: 500;
  margin: 0;

  &&::placeholder {
    color: ${props => props.theme.text.grey};
  }
`
