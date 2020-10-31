import React, { useState } from 'react'
import { Flex, Box } from '../../shared'
import { DisplayLabel } from './utils/DisplayLabel'
import { InputTextAndArea } from './utils/InputTextAndArea'
import { ErrorLabel } from './utils/ErrorLabel'

interface Props {
  type: 'text' | 'textarea' | 'password'
  label?: string
  autofocus?: boolean
  placeholder: string
  width?: string
  setInputData: React.Dispatch<React.SetStateAction<any | null>>
  inputData?: string | null
  inputError?: string
}

export const InputGroup: React.FC<Props> = ({
  type,
  label,
  autofocus,
  placeholder,
  width,
  setInputData,
  inputData,
  inputError
}) => {
  const [error, setError] = useState<string | null>(inputError!)
  const onChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setInputData(event.target.value)

  return (
    <Box width={width}>
      <Flex flexFlow="column">
        <DisplayLabel label={label} />

        <InputTextAndArea
          autofocus={autofocus}
          onChangeHandler={onChangeHandler}
          placeholder={placeholder}
          type={type}
          inputData={inputData}
          setError={setError}
        />

        {error ? <ErrorLabel error={error} /> : <Box height="21px" />}
        <Box height="9px" />
      </Flex>
    </Box>
  )
}
