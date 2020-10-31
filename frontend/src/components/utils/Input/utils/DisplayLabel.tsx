import React, { useState } from 'react'
import { InputLabel } from '../styled/Input.styled'
import { Box, Flex } from '../../../shared'
/* import { IconInfo } from '../../../icon' */

interface Props {
  label?: string
}

export const DisplayLabel: React.FC<Props> = ({ label }) => {
  const [focus, setFocus] = useState(false)

  return label ? (
    <Flex flexFlow="row" onMouseOver={() => setFocus(true)}>
      <InputLabel style={{ margin: '0 6px 0 0' }}>{label}</InputLabel>
      {/* <IconInfo width="12" height="12" /> */}
    </Flex>
  ) : (
    <Box height="16px" />
  )
}
