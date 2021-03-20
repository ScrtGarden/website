import { FC } from 'react'

import Footer from '../Footer'
import Header from '../Header'
import Modal from '../Modal'
import OverlayControls from '../OverlayControls'

type Props = {
  children?: JSX.Element
}

const Layout: FC<Props> = ({ children }) => {
  const isModalOpen = OverlayControls.useStoreState(
    (state) => state.isModalOpen
  )
  const toggleModal = OverlayControls.useStoreActions(
    (actions) => actions.toggleModal
  )

  return (
    <>
      <Header />
      {children}
      <Footer />

      {/* modals */}
      <Modal isOpen={isModalOpen} toggleModal={() => toggleModal()} />
    </>
  )
}

export default Layout
