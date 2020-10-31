import React from 'react'
import { Router } from '../routes'
import { Navbar } from './utils/Navbar'

export const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Router />
    </>
  )
}
