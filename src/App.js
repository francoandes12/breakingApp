import React, { useState } from 'react'

import './App.css'
import { Header } from './components/ui/Header'

import { CharacterGrid } from './components/characters/CharacterGrid'
import { Search } from './components/ui/Search'
function App() {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [query, setQuery] = useState('')
  return (
    <div className='container'>
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      <CharacterGrid
        isLoading={isLoading}
        items={items}
        query={query}
        setItems={setItems}
        setIsLoading={setIsLoading}
      />
    </div>
  )
}

export default App
