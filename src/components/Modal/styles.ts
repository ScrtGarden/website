import styled from 'styled-components'
import Modal from 'styled-react-modal'

import Icon from '../Icons'

const StyledModal = Modal.styled`
  align-items: center;
  background-color: white;
  border-radius: ${(props: any) => props.theme.borderRadii.md};
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: ${(props: any) => `${props.theme.space.md} ${props.theme.space.lg}`};
  max-width: 40rem;
  width: 90%;
`

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontSizes.lg};
  margin: 0;
`

const Wrapper = styled.div`
  column-gap: ${(props) => props.theme.space.lg};
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: ${(props) => props.theme.space.xxl};
  width: 100%;
`

const Card = styled.a`
  align-items: center;
  display: flex;
  flex-direction: column;
  text-decoration: none;
`

const Label = styled.h2`
  font-weight: ${(props) => props.theme.fontWeights.semibold};
  margin: 0;
`

const StyledIcon = styled(Icon)`
  fill: #70c473;
  height: 8rem;
  margin-bottom: ${(props) => props.theme.space.sm};
  width: 8rem;
`

export { StyledModal, Title, Wrapper, Card, Label, StyledIcon }
