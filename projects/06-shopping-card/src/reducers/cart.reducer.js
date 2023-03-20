export const cartInitialState = JSON.parse(window.localStorage.getItem('cart')) || []

export const CART_ACTION_TYPES = {
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
  CLEAR_CART: 'CLEAR_CART'
}

export const updateLocalStorage = state => {
  window.localStorage.setItem('cart', JSON.stringify(state))
}

const UPDATE_STATE_BY_ACTION = {
  [CART_ACTION_TYPES.ADD_TO_CART]: (state, { payload }) => {
    const productInCartIndex = state.findIndex(item => item.id === payload.id)

    if (productInCartIndex >= 0) {
      // 👀 una forma sería usando structuredClone
      // const newCart = structuredClone(state)
      // newCart[productInCartIndex].quantity += 1

      // 👶 usando el map
      // const newCart = state.map(item => (
      //   item.id === payload.id
      //     ? { ...item, quantity: item.quantity + 1 }
      //     : item
      // ))

      // ⚡ usando el spread operator y slice
      const newCart = [
        ...state.slice(0, productInCartIndex),
        { ...state[productInCartIndex], quantity: state[productInCartIndex].quantity + 1 },
        ...state.slice(productInCartIndex + 1)
      ]

      return newCart
    }

    return [
      ...state,
      { ...payload, quantity: 1 }
    ]
  },
  [CART_ACTION_TYPES.REMOVE_FROM_CART]: (state, { payload }) => {
    return state.filter(item => item.id !== payload.id)
  },
  [CART_ACTION_TYPES.CLEAR_CART]: () => {
    return []
  }
}

export function cartReducer (state, action) {
  const { type: actionType } = action
  const fnUpdateState = UPDATE_STATE_BY_ACTION[actionType]

  if (!fnUpdateState) return state

  const newState = fnUpdateState(state, action)
  updateLocalStorage(newState)
  return newState
}
