import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Button } from '../../shared'
import { InputGroup } from '../../utils/Input'
import { signUpService } from './auth.service'
import { AuthContainer } from './AuthContainer'

export const SignUp: React.FC = () => {
  const history = useHistory()

  const [error, setError] = useState({
    email: '',
    password: '',
    username: ''
  })
  const [name, setName] = useState('Jafet0')
  const [username, setUsername] = useState(name)
  const [email, setEmail] = useState(`${name}@test.com`)
  const [password, setPassword] = useState('secret')

  const submitHandler = () => {
    signUpService({ email, name, password, username })
    /* history.push('/') */
  }

  return (
    <AuthContainer title="SignUp">
      <InputGroup
        type="text"
        label="Your name"
        placeholder=""
        setInputData={setName}
        inputData={name}
        inputError={error.username}
      />
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
