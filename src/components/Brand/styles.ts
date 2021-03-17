import styled from 'styled-components'

import { media } from '../../styles/mediaQueries'

const Container = styled.div``

const Text = styled.h1`
  color: ${(props) => props.theme.colors.font.brand};
  font-size: ${(props) => props.theme.fontSizes.lg};
  margin: 0;

  ${media.tablet} {
    font-size: ${(props) => props.theme.fontSizes.xxl};
  }
`

export { Container, Text }
