import { useId } from 'react'
import { useCart } from '../hooks/useCart'
import { CartIcon, ClearCartIcon } from './Icons'
import './Cart.css'
import { CartItem } from './CartItem'

export function Cart () {
  const cartCheckboxId = useId()
  const { cart, addToCart, clearCart } = useCart()

  return (
    <>
      <label htmlFor={cartCheckboxId} className='cart-button'>
        <CartIcon />
      </label>
      <input type='checkbox' id={cartCheckboxId} hidden />

      <aside className='cart'>
        <ul>
          {
            cart.map(product => (
              <CartItem key={product.id} {...product} addToCart={() => addToCart(product)} />
            ))
          }
        </ul>

        {
          cart.length
            ? (
              <button onClick={clearCart}>
                <ClearCartIcon />
              </button>
              )
            : <p>carro vacío</p>
        }
      </aside>
    </>
  )
}
