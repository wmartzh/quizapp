import styled from 'styled-components'

export const InputText = styled.input`
  font-size: 14px;
  border: 1px solid ${props => props.theme.primary.main};
  border-radius: 3px;
  background: none;
  margin-top: 10px;
  color: ${props => props.theme.primary.main};
  outline: none;
  padding: 10px 14px;
  width: 100%;

  &&::placeholder {
    color: ${props => props.theme.text.grey};
  }
`

export const InputArea = styled.textarea`
  font-size: 14px;
  border: 1px solid ${props => props.theme.text.main};
  border-radius: 3px;
  background: none;
  margin-top: 16px;
  color: ${props => props.theme.text.main};
  outline: none;
  padding: 10px 14px;
  width: 100%;
  min-height: 80px;
  max-height: 134px;
  resize: vertical;

  &&::placeholder {
    color: ${props => props.theme.text.grey};
  }
`

export const InputLabel = styled.label`
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  color: ${props => props.theme.primary.main};
`

export const SpanError = styled.span`
  font-size: 14px;
  color: ${props => props.theme.text.error};
`
