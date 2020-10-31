import React from 'react'
import { SignIn } from './pages/Auth/SignIn'
import { Navbar } from './utils/Navbar'

export const App: React.FC = () => {
  return (
    <>
      <Navbar />
      {/* <Router /> */}
      <SignIn />
    </>
  )
}
