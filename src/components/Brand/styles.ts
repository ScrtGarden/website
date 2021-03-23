import styled from 'styled-components'

import { media } from '../../styles/mediaQueries'
import Icon from '../Icons'

type Props = {
  readonly footer?: string
}

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
`

const Text = styled.h1<Props>`
  color: #fff;
  font-size: ${(props) => props.theme.fontSizes.lg};
  font-weight: ${(props) => props.theme.fontWeights.semibold};
  margin: 0;

  ${media.tablet} {
    font-size: ${(props) =>
      props.footer === 'true'
        ? props.theme.fontSizes.lg
        : props.theme.fontSizes.xxl};
  }
`

const StyledIcon = styled(Icon)<Props>`
  fill: #5eae91;
  height: 2.5rem;
  margin-right: ${(props) => props.theme.space.sm};
  width: 2.5rem;

  ${(props) =>
    props.footer === 'true' &&
    `
    fill: #fff;
    height: 1.8rem;
    margin-right: ${props.theme.space.xs};
    width: 1.8rem;
  `}
`

export { Container, Text, StyledIcon }
