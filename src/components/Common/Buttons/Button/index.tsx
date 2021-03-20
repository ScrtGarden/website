import { FC, memo } from 'react'

import { Container } from './styles'

interface OwnProps {
  size?: 'small' | 'medium' | 'large'
  isStretched?: boolean
  isPrimary?: boolean
  isSecondary?: boolean
}

interface Props
  extends Omit<React.HTMLProps<HTMLButtonElement>, 'size'>,
    OwnProps {}

const Button: FC<Props> = (props) => {
  const {
    className,
    children,
    size = 'medium',
    isStretched,
    isPrimary,
    isSecondary,
    onClick,
  } = props

  return (
    <Container
      className={className}
      size={size}
      isStretched={isStretched}
      isPrimary={isPrimary}
      isSecondary={isSecondary}
      onClick={onClick}
    >
      {children}
    </Container>
  )
}

export default memo(Button)
