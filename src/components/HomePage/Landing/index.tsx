import Button from '../../Common/Buttons/Button'
import { InnerContainer, OuterContainer } from '../../Common/Containers'
import { Buttons, Content, Label, Text, Wrapper } from './styles'

const Landing = () => (
  <OuterContainer>
    <InnerContainer>
      <Content>
        <Label>Developer.</Label>
        <Label>Validator.</Label>
        <Label>Grower.</Label>
        <Buttons>
          <Button isStretched isPrimary size="large">
            Start Staking
          </Button>
          <Button isStretched isSecondary size="large">
            Explore
          </Button>
        </Buttons>
        <Wrapper>
          <Text>
            Secret Garden aims to secure and grow the Secret Network ecosystem.
          </Text>
          <Text>We build dApps for the community to enjoy.</Text>
        </Wrapper>
      </Content>
    </InnerContainer>
  </OuterContainer>
)

export default Landing
