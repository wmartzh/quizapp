import styled from 'styled-components'

export const InputQuiz = styled.input`
  font-size: 14px;
  border: none;
  background: none;
  margin-top: 10px;
  color: ${props => props.theme.primary.main};
  outline: none;
  padding: 10px 14px;
  width: 100%;
  font-size: 24px;
  font-weight: 700;

  &&::placeholder {
    color: ${props => props.theme.text.grey};
  }
`
