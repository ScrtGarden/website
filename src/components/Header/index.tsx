import { memo } from 'react'

import Brand from '../Brand'
import Button from '../Common/Buttons/Button'
import { Container, Item, Menu } from './styles'

const Header = () => {
  return (
    <Container>
      <Brand />
      <Menu>
        <Item>About Us</Item>
        <Item as="a" href="https://secret-auction.vercel.app/" target="_blank">
          tulip OTC
        </Item>
        <Button isPrimary size="small">
          Stake
        </Button>
      </Menu>
    </Container>
  )
}

export default memo(Header)
