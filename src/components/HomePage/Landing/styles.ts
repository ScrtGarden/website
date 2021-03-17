import { animated } from 'react-spring'
import styled from 'styled-components'

import { media } from '../../../styles/mediaQueries'

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Label = styled(animated.h1)`
  color: #fff;
  font-size: 6rem;
  margin: 0;

  ${media.mobileL} {
    font-size: 7rem;
  }

  ${media.tablet} {
    font-size: 12rem;
  }
`

const Wrapper = styled.div`
  margin-top: ${(props) => props.theme.space.xxl};
`

const Text = styled(animated.p)`
  font-size: ${(props) => props.theme.fontSizes.sm};
  margin: 0;

  :first-child {
    margin-bottom: ${(props) => props.theme.space.sm};
  }

  ${media.mobileL} {
    font-size: ${(props) => props.theme.fontSizes.md};
  }

  ${media.tablet} {
    font-size: ${(props) => props.theme.fontSizes.lg};
  }
`

const Buttons = styled(animated.div)`
  column-gap: ${(props) => props.theme.space.lg};
  display: grid;
  grid-template-columns: 1fr;
  margin-top: ${(props) => props.theme.space.xxl};
  max-width: 150px;

  ${media.tablet} {
    max-width: 250px;
  }
`

export { Content, Label, Text, Buttons, Wrapper }
