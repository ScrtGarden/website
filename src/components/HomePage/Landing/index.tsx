import { useSpring, useTrail } from 'react-spring'

import useWindowSize from '../../../../utils/useWindowSize'
import Button from '../../Common/Buttons/Button'
import { InnerContainer, OuterContainer } from '../../Common/Containers'
import { Buttons, Content, Label, Text, Wrapper } from './styles'

const LABELS: string[] = ['Developer.', 'Validator.', 'Grower.']
const TEXTS: string[] = [
  'Secret Garden aims to secure and grow the Secret Network ecosystem.',
  'We build dApps for the community to enjoy.',
]

const Landing = () => {
  const { width } = useWindowSize()

  const trail = useTrail(LABELS.length, {
    opacity: 1 as any,
    y: 0,
    from: { opacity: 0, y: 40 },
    delay: 500,
  })

  const { opacity, y } = useSpring({
    from: { opacity: 0 as any, y: 40 },
    to: { opacity: 1 as any, y: 0 },
    delay: 1300,
  })

  const trailTwo = useTrail(TEXTS.length, {
    opacity: 1 as any,
    y: 0,
    from: { opacity: 0, y: 40 },
    delay: 1500,
  })

  return (
    <OuterContainer>
      <InnerContainer>
        <Content>
          {trail.map(({ opacity, y }, index) => (
            <Label
              key={LABELS[index]}
              style={{
                opacity,
                transform: y.to((y) => `translateY(${y}px)`),
              }}
            >
              {LABELS[index]}
            </Label>
          ))}
          <Buttons
            style={{
              opacity,
              transform: y.to((y) => `translateY(${y}px)`),
            }}
          >
            <Button
              isStretched
              isPrimary
              size={width && width > 768 ? 'large' : 'medium'}
            >
              Start Staking
            </Button>
            {/* <Button isStretched isSecondary size="large">
              Explore
            </Button> */}
          </Buttons>
          <Wrapper>
            {trailTwo.map(({ opacity, y }, index) => (
              <Text
                key={LABELS[index]}
                style={{
                  opacity,
                  transform: y.to((y) => `translateY(${y}px)`),
                }}
              >
                {TEXTS[index]}
              </Text>
            ))}
          </Wrapper>
        </Content>
      </InnerContainer>
    </OuterContainer>
  )
}

export default Landing
