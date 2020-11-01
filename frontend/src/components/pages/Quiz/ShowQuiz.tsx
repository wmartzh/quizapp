import React from 'react'
import { Box, Card, Container, Flex, Font, Margin } from '../../shared'
import { UserAndTitle } from '../Dashboard/UserAndTitle'

export const CreateQuiz: React.FC = () => {
  return (
    <Container>
      <UserAndTitle />
      <Flex justifyContent="center">
        <Box width="400px">
          <Margin value="0 0 24px 0">
            <Card shadow padding="24px">
              <Flex justifyContent="space-between">
                <span>a</span>
                <Font fontSize="26px" fontWeight="600">
                  Question 02
                </Font>
                <span>s</span>
              </Flex>
            </Card>
          </Margin>
          <Card shadow>Question 02</Card>
        </Box>
      </Flex>
    </Container>
  )
}
