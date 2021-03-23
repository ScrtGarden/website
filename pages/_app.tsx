import { StoreProvider } from 'easy-peasy'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import { ModalProvider } from 'styled-react-modal'

import GlobalStyle from '../src/styles/GlobalStyle'
import theme from '../src/styles/theme'
import { useStore } from '../store'

const MyApp = ({ Component, pageProps }: AppProps) => {
  const store = useStore(pageProps.initialState)

  return (
    <>
      <Head>
        <link rel="icon" type="image/png" href="favicons/favicon-16x16.png" />
        <link rel="icon" type="image/png" href="favicons/favicon-32x32.png" />
        <link rel="icon" type="image/png" href="favicons/favicon-128x128.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Primary Meta Tags */}
        <meta property="title" content="Home" />
        <meta
          name="description"
          content="We secure and grow the Secret Network ecosystem by building apps for the community to enjoy!"
        />
      </Head>
      <StoreProvider store={store}>
        <ThemeProvider theme={theme.light}>
          <ModalProvider>
            <GlobalStyle />
            <Component {...pageProps} />
          </ModalProvider>
        </ThemeProvider>
      </StoreProvider>
    </>
  )
}

export default MyApp
