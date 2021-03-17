import styled from 'styled-components'

const OuterContainer = styled.div`
  padding: ${(props) => props.theme.space.xxl}
    ${(props) => props.theme.space.lg};
`

const InnerContainer = styled.div`
  margin: 0 auto;
  max-width: 900px;
`

export { InnerContainer, OuterContainer }
