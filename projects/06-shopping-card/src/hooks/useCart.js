import { useContext } from 'react'
import { CartContext } from '../context/CartProvider'

export function useCart () {
  const context = useContext(CartContext)
  const { cart, dispatch } = context

  if (context === undefined) {
    throw new Error('useCart must be used within a cartProvider')
  }

  const addToCart = product => dispatch({
    type: 'ADD_TO_CART',
    payload: product
  })

  const removeFromCart = product => dispatch({
    type: 'REMOVE_FROM_CART',
    payload: product
  })

  const clearCart = () => dispatch({ type: 'CLEAR_CART' })

  return {
    cart,
    addToCart,
    removeFromCart,
    clearCart
  }
}
