// import original module declarations
import 'styled-components'
import theme from './src/styles/theme'

type CustomTheme = typeof theme.light

declare module 'styled-components' {
  export interface DefaultTheme extends CustomTheme {}
}
