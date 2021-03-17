import { memo } from 'react'

import { InnerContainer } from '../Common/Containers'
import {
  Anchor,
  Brand,
  Container,
  Content,
  StyledIcon,
  Text,
  Wrapper,
} from './styles'

const Footer = () => {
  return (
    <Container>
      <InnerContainer>
        <Content>
          <Brand>Secret Garden</Brand>
          <Wrapper>
            <Text>{`Copyright © ${new Date().getFullYear()} Secret Garden All rights reserved.`}</Text>
            <Anchor href="https://github.com/ScrtGarden" target="_blank">
              <StyledIcon name="github" />
            </Anchor>
          </Wrapper>
        </Content>
      </InnerContainer>
    </Container>
  )
}

export default memo(Footer)
