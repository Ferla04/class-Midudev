import { useState, useCallback } from 'react'
import debounce from 'just-debounce-it'
import { Movies } from './components/Movies'
import { useMovies, useSearch } from './hooks'
import './App.css'

function App () {
  const [sort, setSort] = useState(false)

  const { search, error, updateSearch } = useSearch()
  const { movies, loading, getMovies } = useMovies({ search, sort })

  const debouncedGetMovies = useCallback(
    debounce(search => {
      console.log('search', search)
      getMovies({ search })
    }, 500)
    , []
  )

  const handleSubmit = (event) => {
    event.preventDefault()

    //* Gestionar el form de forma descontrolada
    // const fields = Object.fromEntries(new window.FormData(event.target))
    // console.log(fields)

    getMovies({ search }) // Pasar como parametro el search para que la funcion se
    // ejecute cada vez que hacemos el submit
  }

  const handleSort = () => {
    setSort(!sort)
  }

  const handleChange = ({ target }) => {
    const newSearch = target.value
    updateSearch(newSearch)

    debouncedGetMovies(newSearch)
    // getMovies({ search: newSearch }) //* Hacer un debounce lib: https://github.com/angus-c/just
  }

  return (
    <div className='page'>

      <header>
        <h1>Prueba Tecnica / Movie Search</h1>

        <form className='form' onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            name='query'
            value={search}
            type='text'
            placeholder='Avengers, start Wars, The Matrix'
          />
          <input type='checkbox' onChange={handleSort} checked={sort} />
          <button type='submit'>Buscar</button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </header>

      <main>
        {
          loading ? <p>Cargando ...</p> : <Movies movies={movies} />
        }
      </main>
    </div>
  )
}

export default App
