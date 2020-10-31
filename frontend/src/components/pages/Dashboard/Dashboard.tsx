import React from 'react'
import { Card, Container, Flex, Font, Grid, Margin } from '../../shared'
import { UserAndTitle } from './UserAndTitle'

export const Dashboard: React.FC = ({ children }) => {
  return (
    <Container>
      <UserAndTitle />
      <Grid>
        <Card>Hola</Card>
        <Card>Hola</Card>
        <Card>Hola</Card>
        <Card>Hola</Card>
        <Card>Hola</Card>
      </Grid>
    </Container>
  )
}
