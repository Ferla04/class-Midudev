import { createContext, useReducer } from 'react'
import { cartReducer, cartInitialState } from '../reducers/cart.reducer'

export const CartContext = createContext()

export function CartProvider ({ children }) {
  const [state, dispatch] = useReducer(cartReducer, cartInitialState)

  return (
    <CartContext.Provider value={{ cart: state, dispatch }}>
      {children}
    </CartContext.Provider>
  )
}
