import styled from 'styled-components'

interface ContainerProps {
  readonly size: 'small' | 'medium' | 'large'
  readonly isStretched?: boolean
  readonly isPrimary?: boolean
  readonly isSecondary?: boolean
}

const Container = styled.button<ContainerProps>`
  border: none;
  color: ${(props) => props.theme.colors.button.text.default};
  background-color: ${(props) =>
    props.theme.colors.button.background.default.base};
  cursor: pointer;
  font-size: ${(props) => props.theme.fontSizes.md};
  font-weight: ${(props) => props.theme.fontWeights.semibold};
  border-radius: ${(props) => props.theme.borderRadii.md};
  outline: none;
  padding: ${(props) => props.theme.space.xs} ${(props) => props.theme.space.md};
  transition: background-color 0.3s ease;
  ${(props) => props.isStretched && 'width: 100%'};

  :hover {
    background-color: ${(props) =>
      props.theme.colors.button.background.default.hover};

    ${(props) =>
      props.isPrimary &&
      `
    background-color: ${props.theme.colors.button.background.primary.hover};
  `}

    ${(props) =>
      props.isSecondary &&
      `
    background-color: ${props.theme.colors.button.background.secondary.hover};
  `}
  }

  :active {
    background-color: ${(props) =>
      props.theme.colors.button.background.default.active};

    ${(props) =>
      props.isPrimary &&
      `
    background-color: ${props.theme.colors.button.background.primary.active};
  `}

    ${(props) =>
      props.isSecondary &&
      `
    background-color: ${props.theme.colors.button.background.secondary.active};
  `}
  }

  ${(props) =>
    props.size === 'small' &&
    `
    padding: ${props.theme.space.xs} ${props.theme.space.md};
    font-size: ${props.theme.fontSizes.md};
  `};

  ${(props) =>
    props.size === 'medium' &&
    `
    padding: ${props.theme.space.sm} ${props.theme.space.md};
    font-size: ${props.theme.fontSizes.md};
  `};

  ${(props) =>
    props.size === 'large' &&
    `
    padding: ${props.theme.space.md} ${props.theme.space.lg};
    font-size: ${props.theme.fontSizes.md};
  `};

  ${(props) =>
    props.isPrimary &&
    `
    color: ${props.theme.colors.button.text.primary};
    background-color: ${props.theme.colors.button.background.primary.base};
  `}

  ${(props) =>
    props.isSecondary &&
    `
    color: ${props.theme.colors.button.text.secondary};
    background-color: ${props.theme.colors.button.background.secondary.base};
  `}
`

export { Container }
