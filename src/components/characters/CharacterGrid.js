import React, { useEffect } from 'react'
import Loader from 'react-loader-spinner'
import { CharacterItem } from './CharacterItem'
import axios from 'axios'
export const CharacterGrid = ({
  items,
  isLoading,
  query,
  setItems,
  setIsLoading
}) => {
  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      )
      setItems(result.data)
      setIsLoading(false)
    }
    fetchItems()
  }, [query, setIsLoading, setItems])
  return (
    <div>
      {isLoading ? (
        <div className='center'>
          <Loader
            type='Puff'
            color='#ffff'
            height={100}
            width={100}
            timeout={3000} //3 secs
          />
        </div>
      ) : (
        <section className='cards'>
          {items.map((item) => (
            <CharacterItem key={item.char_id} item={item} />
          ))}
        </section>
      )}
    </div>
  )
}
