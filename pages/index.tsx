import Head from 'next/head'

import Home from '../src/components/HomePage'
import Layout from '../src/components/Layout'
import OverlayControls from '../src/components/OverlayControls'

const Page = () => (
  <>
    <Head>
      <title>Secret Garden</title>
    </Head>
    <OverlayControls.Provider>
      <Layout>
        <Home />
      </Layout>
    </OverlayControls.Provider>
  </>
)

export default Page
