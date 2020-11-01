import React, { useState } from 'react'
import { AnswerContainer, InputAnswer } from '../styled/Answer.styled'

interface Props {
  checked: boolean
  setChecked: React.Dispatch<React.SetStateAction<boolean>>
  placeholder: string
  data: string
  setData: React.Dispatch<React.SetStateAction<string>>
}

export const AddAnswer: React.FC<Props> = ({
  checked,
  setChecked,
  placeholder,
  data,
  setData
}) => {
  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) =>
    setData(event.target.value)

  return (
    <AnswerContainer>
      <svg
        onClick={() => setChecked(prev => !prev)}
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {checked ? (
          <>
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
          </>
        ) : (
          <circle cx="12" cy="12" r="10"></circle>
        )}
      </svg>
      <InputAnswer
        type="text"
        placeholder={placeholder}
        value={data}
        onChange={changeHandler}
      />
    </AnswerContainer>
  )
}
