import React from 'react'
import { InputText, InputArea } from '../styled/Input.styled'
import { SetErrorType } from '../model/InputTypes'

interface Props {
  type: 'text' | 'textarea' | 'password' | 'email'
  placeholder: string
  autofocus?: boolean
  inputData?: string | null
  onChangeHandler: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void
  setError?: SetErrorType
}

export const InputTextAndArea: React.FC<Props> = ({
  type,
  placeholder,
  autofocus,
  inputData,
  onChangeHandler,
  setError
}) => {
  // TODO: management Errors
  return type !== 'textarea' ? (
    <InputText
      autoFocus={autofocus}
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
