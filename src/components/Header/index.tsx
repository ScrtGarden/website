import { memo } from 'react'

import Brand from '../Brand'
import Button from '../Common/Buttons/Button'
import OverlayControls from '../OverlayControls'
import { Container, Item, Menu } from './styles'

const Header = () => {
  const toggleModal = OverlayControls.useStoreActions(
    (actions) => actions.toggleModal
  )

  return (
    <Container>
      <Brand />
      <Menu>
        <Item as="a" href="https://tulip.scrtgarden.com" target="_blank">
          tulip OTC
        </Item>
        <Button isPrimary size="small" onClick={() => toggleModal()}>
          Stake
        </Button>
      </Menu>
    </Container>
  )
}

export default memo(Header)
