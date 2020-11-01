import React, { useState } from 'react'
import { Answers } from '../../../../models/answers.model'
import { Card, Margin } from '../../../shared'
import { AddButton } from '../styled/AddButton'
import { AddAnswer } from '../utils/AddAnswar'
import { InputQuiz } from './InputQuiz'

interface Props {
  placeholder: string
}

export const QuizForm: React.FC<Props> = ({ placeholder }) => {
  const [temp, setTemp] = useState('')
  const [tempCheck, setTempCheck] = useState(false)
  const [answers, setAnswers] = useState<Answers[]>([
    {
      id: 0,
      checked: true,
      placeholder: '1. Your answers.',
      data: ''
    }
  ])

  const addAnswer = () => {
    const d = {
      id: answers.length,
      checked: tempCheck,
      placeholder: `${answers.length + 1}. Your answer.`,
      data: temp
    }
    setTemp('')
    setTempCheck(false)
    setAnswers(prev => [...prev, d])
    console.log(answers)
  }

  return (
    <Margin value="0 0 24px 0">
      <Card shadow>
        <InputQuiz placeholder={placeholder} />
        {answers.map(({ id, checked, placeholder, data }) => (
          <AddAnswer
            key={id}
            checked={checked}
            setChecked={setTempCheck}
            placeholder={placeholder}
            data={data}
            setData={setTemp}
          />
        ))}
        <AddButton onClick={addAnswer} />
      </Card>
    </Margin>
  )
}
