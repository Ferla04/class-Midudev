import { useCatImage } from './hooks/useCatImage'
import { useCatFact } from './hooks/useCatFact'
import './App.css'

const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

const App = () => {
  const { fact, handleRamdomFact } = useCatFact()
  const { imageUrl } = useCatImage({ fact })

  return (
    <main>
      <h1>App de gatitos</h1>
      <button onClick={handleRamdomFact}>Get new Fact</button>
      {fact && <p>{fact}</p>}
      {imageUrl && <img src={`${CAT_PREFIX_IMAGE_URL}${imageUrl}`} alt={`Image extracted using the first words for ${fact}`} />}
    </main>
  )
}

export default App
