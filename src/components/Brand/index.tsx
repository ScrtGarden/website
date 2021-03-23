import { FC, memo } from 'react'

import { Container, StyledIcon, Text } from './styles'

type Props = {
  footer?: boolean
}

const Brand: FC<Props> = ({ footer }) => {
  return (
    <Container>
      <StyledIcon name="flower" footer={footer} />
      <Text footer={footer}>Secret Garden</Text>
    </Container>
  )
}

export default memo(Brand)
