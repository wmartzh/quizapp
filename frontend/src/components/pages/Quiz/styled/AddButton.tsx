import React from 'react'
import styled from 'styled-components'

const AddButtonContainer = styled.div`
  border-radius: 26px;
  background: #dfdfdf;
  padding: 8px 16px 4px 16px;
  margin: 8px 0;
  text-align: center;
  cursor: pointer;
  svg {
    margin-top: 4px;
    stroke: ${props => props.theme.primary.main};
  }
`

interface Props {
  onClick?:
    | ((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void)
    | undefined
}

export const AddButton: React.FC<Props> = ({ onClick }) => {
  return (
    <AddButtonContainer onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="12" y1="5" x2="12" y2="19"></line>
        <line x1="5" y1="12" x2="19" y2="12"></line>
      </svg>
    </AddButtonContainer>
  )
}
