import { FC, memo } from 'react'

import { Container } from './styles'

interface Props {
  className?: string
  children?: JSX.Element | string
  size?: 'small' | 'medium' | 'large'
  isStretched?: boolean
  isPrimary?: boolean
  isSecondary?: boolean
}

const Button: FC<Props> = (props) => {
  const {
    className,
    children,
    size = 'medium',
    isStretched,
    isPrimary,
    isSecondary,
  } = props

  return (
    <Container
      className={className}
      size={size}
      isStretched={isStretched}
      isPrimary={isPrimary}
      isSecondary={isSecondary}
    >
      {children}
    </Container>
  )
}

export default memo(Button)
