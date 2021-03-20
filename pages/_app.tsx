import { StoreProvider } from 'easy-peasy'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { ModalProvider } from 'styled-react-modal'

import GlobalStyle from '../src/styles/GlobalStyle'
import theme from '../src/styles/theme'
import { useStore } from '../store'

const MyApp = ({ Component, pageProps }: AppProps) => {
  const store = useStore(pageProps.initialState)

  return (
    <StoreProvider store={store}>
      <ThemeProvider theme={theme.light}>
        <ModalProvider>
          <GlobalStyle />
          <Component {...pageProps} />
        </ModalProvider>
      </ThemeProvider>
    </StoreProvider>
  )
}

export default MyApp
