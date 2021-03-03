import styled from 'styled-components'

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Label = styled.h1`
  color: #fff;
  font-size: 12rem;
  margin: 0;
`

const Wrapper = styled.div`
  margin-top: ${(props) => props.theme.space.xxl};
`

const Text = styled.p`
  font-size: ${(props) => props.theme.fontSizes.lg};
  margin: 0;

  :first-child {
    margin-bottom: ${(props) => props.theme.space.sm};
  }
`

const Buttons = styled.div`
  column-gap: ${(props) => props.theme.space.lg};
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: ${(props) => props.theme.space.xxl};
  width: 500px;
`

export { Content, Label, Text, Buttons, Wrapper }
