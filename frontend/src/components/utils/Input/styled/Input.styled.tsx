import styled from 'styled-components'

export const InputText = styled.input`
  font-size: 14px;
  border: 1px solid ${props => props.theme.text.main};
  border-radius: 3px;
  background: none;
  margin-top: 10px;
  color: ${props => props.theme.text.main};
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

export const InputFile = styled.div`
  width: 100%;
  height: 393px;
  margin-top: 10px;
  border: 1px solid ${props => props.theme.text.main};
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  color: ${props => props.theme.text.grey};

  background-color: transparent;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  input[type='file'] {
    display: none;
  }
`

export const InputLabel = styled.label`
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
`

export const SpanError = styled.span`
  font-size: 14px;
  color: ${props => props.theme.text.error};
`
