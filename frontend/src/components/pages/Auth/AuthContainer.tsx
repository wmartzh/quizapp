import React from 'react'
import { useHistory } from 'react-router-dom'
import { Card, Container, Flex, Font, Margin } from '../../shared'

export const AuthContainer: React.FC<{ title: string }> = ({
  children,
  title
}) => {
  const history = useHistory()
  const location = history.location.pathname
  const changeHandler = () => {
    location === '/signup' ? history.push('/signin') : history.push('/signup')
  }

  return (
    <Container width="410px">
      <Margin value="0 0 24px">
        <Card shadow padding="24px">
          <Flex justifyContent="center">
            <Font fontSize="24px" fontWeight="700">
              {title}
            </Font>
          </Flex>
        </Card>
      </Margin>
      <Card shadow padding="24px">
        {children}
        <Flex justifyContent="center">
          <Margin value="14px 0 0 0">
            <Font
              fontSize="12px"
              style={{ cursor: 'pointer' }}
              onClick={changeHandler}
            >
              {title !== 'SignIn' ? 'SignIn' : 'SignUp'}
            </Font>
          </Margin>
        </Flex>
      </Card>
    </Container>
  )
}
