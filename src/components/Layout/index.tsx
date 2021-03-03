import { FC } from 'react'

import Footer from '../Footer'
import Header from '../Header'

interface Props {
  children?: JSX.Element
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default Layout
