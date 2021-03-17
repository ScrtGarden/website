import styled from 'styled-components'

import { media } from '../../styles/mediaQueries'

const Container = styled.div`
  align-items: center;
  backdrop-filter: blur(5px);
  display: flex;
  justify-content: space-between;
  padding: ${(props) => props.theme.space.md};
  position: sticky;
  top: 0;
`

const Menu = styled.div`
  align-items: center;
  column-gap: ${(props) => props.theme.space.md};
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  ${media.mobileL} {
    column-gap: ${(props) => props.theme.space.lg};
  }

  ${media.tablet} {
    column-gap: ${(props) => props.theme.space.xl};
  }
`

const Item = styled.div`
  color: ${(props) => props.theme.colors.font.menuItem};
  font-size: ${(props) => props.theme.fontSizes.md};
  font-weight: ${(props) => props.theme.fontWeights.semibold};
  text-decoration: none;
`

export { Container, Menu, Item }
