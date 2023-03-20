import { useState, createContext } from 'react'

// 1. Crear el contexto, este es el que llamamos con el use context
export const FiltersContext = createContext()

// 2. Crear el provider
export function FiltersProvider ({ children }) {
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0
  })

  return (
    <FiltersContext.Provider value={{ filters, setFilters }}>
      {children}
    </FiltersContext.Provider>
  )
}
