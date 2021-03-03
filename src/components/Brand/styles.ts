import styled from 'styled-components'

const Container = styled.div``

const Text = styled.h1`
  color: ${(props) => props.theme.colors.font.brand};
  font-size: ${(props) => props.theme.fontSizes.xxl};
  margin: 0;
`

export { Container, Text }
