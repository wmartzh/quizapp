import React, { useState } from 'react'
import { Box, Button, Card, Container, Flex, Margin } from '../../../shared'
import { QuizForm } from './QuizForm'

export const CreateQuiz: React.FC = () => {
  const [questions, setQuestions] = useState([
    {
      id: 0,
      question: '',
      placeholder: '1. Question?'
    }
  ])

  const addQuestion = () => {
    const newQuestion = {
      id: questions.length,
      question: '',
      placeholder: `${questions.length + 1}. Question?`
    }

    setQuestions(prev => [...prev, newQuestion])
  }

  return (
    <Container>
      <Flex justifyContent="center">
        <Box width="400px">
          {questions.map(({ id, question, placeholder }) => (
            <QuizForm key={id} placeholder={placeholder} />
          ))}
          <Margin value="24px 0">
            <Card padding="2px 24px">
              <Button onClick={addQuestion}>+</Button>
            </Card>
          </Margin>
        </Box>
      </Flex>
    </Container>
  )
}
