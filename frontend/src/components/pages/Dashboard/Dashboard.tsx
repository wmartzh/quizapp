import React from 'react'
import { Card, Container, Grid } from '../../shared'
import { UserAndTitle } from './UserAndTitle'

export const Dashboard: React.FC = ({ children }) => {
  return (
    <Container>
      <UserAndTitle title="Quizzes" />
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
