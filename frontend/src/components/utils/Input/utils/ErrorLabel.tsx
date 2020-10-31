import React from 'react'
import { SpanError } from '../styled/Input.styled'

interface Props {
  error: string
}

export const ErrorLabel: React.FC<Props> = ({ error }) => {
  return <SpanError>{error}</SpanError>
}
