import React, { useState } from 'react'
import { Container, Card, Box, Button } from '../../shared'
import { InputGroup } from '../../utils/Input'

export const SignIn: React.FC = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <Container width="310px">
      <Card>SignIn</Card>
      <Box height="24px" />
      <Card shadow padding="24px">
        <InputGroup
          type="text"
          label="Email"
          placeholder=""
          setInputData={setEmail}
          inputData={email}
        />
        <InputGroup
          type="text"
          label="Password"
          placeholder=""
          setInputData={setPassword}
          inputData={password}
        />
        <Button>Send</Button>
      </Card>
    </Container>
  )
}
