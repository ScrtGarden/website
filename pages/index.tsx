import Home from '../src/components/HomePage'
import Layout from '../src/components/Layout'
import OverlayControls from '../src/components/OverlayControls'

const Page = () => (
  <OverlayControls.Provider>
    <Layout>
      <Home />
    </Layout>
  </OverlayControls.Provider>
)

export default Page
