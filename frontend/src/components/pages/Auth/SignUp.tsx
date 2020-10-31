import React, { useState } from 'react'
import { Button } from '../../shared'
import { InputGroup } from '../../utils/Input'
import { signUpService } from './auth.service'
import { AuthContainer } from './AuthContainer'

export const SignUp: React.FC = ({ children }) => {
  const [error, setError] = useState({
    email: '',
    password: '',
    username: ''
  })
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submitHandler = () => {
    console.log(signUpService({ email, password, username }))
  }

  return (
    <AuthContainer title="SignUp">
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
        type="text"
        label="Username"
        placeholder=""
        setInputData={setUsername}
        inputData={username}
        inputError={error.username}
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
        Start!!
      </Button>
    </AuthContainer>
  )
}
