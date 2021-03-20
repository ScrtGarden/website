import { FC } from 'react'

import { Card, Label, StyledIcon, StyledModal, Title, Wrapper } from './styles'

const DATA = {
  keplr: {
    label: 'Keplr',
    link:
      'https://wallet.keplr.app/#/secret/stake?modal=stake&validator=secretvaloper1hd6kv7nf6zcd3090kymwjk3t7a6xnfvcp8rdwy',
    icon: 'keplr',
  },
  secretnodes: {
    label: 'Secret Nodes',
    link:
      'https://secretnodes.com/secret/chains/secret-2/validators/E4F2B03625C6BEEA37CB0A3404040264468C33CC',
    icon: 'puzzle-piece',
  },
}

type Props = {
  isOpen: boolean
  toggleModal: () => void
}

const Modal: FC<Props> = (props) => {
  const { isOpen, toggleModal } = props
  return (
    <StyledModal
      isOpen={isOpen}
      onBackgroundClick={toggleModal}
      onEscapeKeydown={toggleModal}
    >
      <>
        <Title>Choose your platform</Title>
        <Wrapper>
          {Object.values(DATA).map((item) => (
            <Card key={item.label} href={item.link} target="_blank">
              <StyledIcon name={item.icon} />
              <Label>{item.label}</Label>
            </Card>
          ))}
        </Wrapper>
      </>
    </StyledModal>
  )
}

export default Modal
