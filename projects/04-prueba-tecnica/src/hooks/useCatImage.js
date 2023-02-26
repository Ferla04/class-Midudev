import { useEffect, useState } from 'react'

export const useCatImage = ({ fact }) => {
  const [imageUrl, setImageUrl] = useState()

  useEffect(() => {
    if (!fact) return

    const firstWord = fact.split(' ', 3).join(' ')

    fetch(`https://cataas.com/cat/says/${firstWord}?json=true`)
      .then(res => res.json())
      .then(({ url }) => setImageUrl(url))
  }, [fact])

  return { imageUrl }
}
