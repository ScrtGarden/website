import styled from 'styled-components'

import { media } from '../../styles/mediaQueries'
import Icon from '../Icons'

const Container = styled.div`
  background-color: ${(props) => props.theme.colors.footer.bg};
  padding: ${(props) => `${props.theme.space.xxl} ${props.theme.space.lg}`};
`

const Content = styled.div``

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  margin-top: ${(props) => props.theme.space.sm};

  ${media.tablet} {
    margin-top: ${(props) => props.theme.space.md};
  }
`

const Text = styled.p`
  font-size: ${(props) => props.theme.fontSizes.xs};
  margin: 0;

  ${media.mobileL} {
    font-size: ${(props) => props.theme.fontSizes.sm};
  }

  ${media.tablet} {
    font-size: ${(props) => props.theme.fontSizes.md};
  }
`

const Anchor = styled.a``

const StyledIcon = styled(Icon)`
  /* cursor: pointer; */
  fill: ${(props) => props.theme.colors.footer.icon};
  height: ${(props) => props.theme.iconSizes.lg};
  width: ${(props) => props.theme.iconSizes.lg};
`

export { Container, Content, Wrapper, Text, StyledIcon, Anchor }
