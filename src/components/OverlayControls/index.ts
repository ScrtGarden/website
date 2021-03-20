import { Action, action, createContextStore } from 'easy-peasy'

interface State {
  isModalOpen: boolean
}

interface Actions {
  toggleModal: Action<IOverlayControls, boolean | void>
}

interface IOverlayControls extends State, Actions {}

const state: State = {
  isModalOpen: false,
}

const actions: Actions = {
  toggleModal: action((state, payload) => {
    state.isModalOpen = payload || !state.isModalOpen
  }),
}

const OverlayControls = createContextStore({
  ...state,
  ...actions,
})

export default OverlayControls
