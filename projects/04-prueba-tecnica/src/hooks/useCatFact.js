import { useEffect, useState } from 'react'
import { getRandomFact } from '../services/facts'

export const useCatFact = () => {
  const [fact, setFact] = useState()

  const handleRamdomFact = () => {
    getRandomFact().then(newFact => setFact(newFact))
  }

  useEffect(handleRamdomFact, [])

  return { fact, handleRamdomFact }
}
