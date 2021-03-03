import { memo } from 'react'

import { Container, Text } from './styles'

const Brand = () => {
  return (
    <Container>
      <Text>Secret Garden</Text>
    </Container>
  )
}

export default memo(Brand)
