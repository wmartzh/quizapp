import React from 'react'
import styled from 'styled-components'
import { Flex, Margin } from '../../shared'

const IconApp = styled.div`
  font-weight: 700;
  font-size: 26px;
  line-height: 39px;
  color: ${props => props.theme.text.main};

  span {
    font-weight: 300;
  }
`

export const Navbar: React.FC = ({ children }) => {
  return (
    <Flex justifyContent="center">
      <Margin value="24px 0 34px 0">
        <IconApp>
          Quizz<span>app</span>
        </IconApp>
      </Margin>
    </Flex>
  )
}
