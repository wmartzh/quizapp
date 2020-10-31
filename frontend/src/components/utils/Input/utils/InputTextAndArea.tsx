import React from 'react'
import { InputText, InputArea } from '../styled/Input.styled'
import { SetErrorType } from '../model/InputTypes'

interface Props {
  type: 'text' | 'textarea' | 'file'
  placeholder: string
  inputData?: string | null
  onChangeHandler: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void
  setError?: SetErrorType
}

export const InputTextAndArea: React.FC<Props> = ({
  type,
  placeholder,
  inputData,
  onChangeHandler,
  setError
}) => {
  // TODO: management Errors
  return type === 'text' ? (
    <InputText
      type={type}
      placeholder={placeholder}
      onChange={onChangeHandler}
      value={inputData ? inputData : ''}
    />
  ) : (
    <InputArea
      placeholder={placeholder}
      rows={5}
      onChange={onChangeHandler}
      value={inputData ? inputData : ''}
    />
  )
}
