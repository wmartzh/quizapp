import React, { useState } from 'react'
import { Button } from '../../shared'
import { InputGroup } from '../../utils/Input'
import { signInService } from './auth.service'
import { AuthContainer } from './AuthContainer'

export const SignIn: React.FC = () => {
  const [error, setError] = useState({
    email: '',
    password: ''
  })
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submitHandler = () => {
    console.log(signInService({ email, password }))
  }

  return (
    <AuthContainer title="SignIn">
      <InputGroup
        autofocus
        type="text"
        label="Email"
        placeholder=""
        setInputData={setEmail}
        inputData={email}
        inputError={error.email}
      />
      <InputGroup
        type="password"
        label="Password"
        placeholder=""
        setInputData={setPassword}
        inputData={password}
        inputError={error.password}
      />
      <Button onClick={submitHandler} disable={!email && !password}>
        start
      </Button>
    </AuthContainer>
  )
}
