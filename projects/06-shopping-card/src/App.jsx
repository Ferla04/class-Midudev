import { useState } from 'react'
import { Cart, Footer, Header, Products } from './components'
import { IS_DEVELOPMENT } from './config'
import { CartProvider } from './context/CartProvider'
import { useFilters } from './hooks/useFilters'
import { products as initialProducts } from './mocks/products.json'

function App () {
  const [products] = useState(initialProducts)
  const { filterProducts } = useFilters()

  const filteredProducts = filterProducts(products)

  return (
    <CartProvider>
      <Cart />
      <Header />
      <Products products={filteredProducts} />
      {IS_DEVELOPMENT && <Footer />}
    </CartProvider>
  )
}

export default App
