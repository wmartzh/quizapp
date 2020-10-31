import React from 'react'
import styled from 'styled-components'
import { Margin } from '../../shared'

const SpecialContainer = styled.div`
  width: 100%;
  color: ${props => props.theme.text.main};
  margin-bottom: 24px;
  .user {
    font-weight: 600;
    font-size: 20px;
    line-height: 26px;
    text-align: center;
    margin-bottom: 6px;
  }
  .logout {
    font-weight: 300;
    font-size: 14px;
    line-height: 18px;
    text-align: center;
    cursor: pointer;
  }
  h1 {
    font-size: 30px;
    font-weight: 700;
  }
`

export const UserAndTitle: React.FC = () => {
  const user = { username: 'Jafet' }
  return (
    <SpecialContainer>
      <div className="user">{user.username}</div>
      <div className="logout">logout</div>
      <Margin value="57px 0 0 0">
        <h1>Quizzes</h1>
      </Margin>
    </SpecialContainer>
  )
}
