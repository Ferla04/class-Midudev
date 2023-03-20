import { useContext } from 'react'
import { FiltersContext } from '../context/FiltersProvider'

export function useFilters () {
  const { filters, setFilters } = useContext(FiltersContext)

  const filterProducts = (products) => {
    return products.filter(product => {
      return (
        product.price >= filters.minPrice &&
        (
          filters.category === 'all' ||
          product.category === filters.category
        )
      )
    })
  }

  const onFilterChange = ({ target }) => {
    setFilters(prevState => ({
      ...prevState,
      [target.name]: target.value
    }))
  }

  return {
    filters,
    onFilterChange,
    filterProducts
  }
}
