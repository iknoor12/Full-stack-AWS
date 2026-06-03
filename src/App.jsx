import { useState, useEffect } from 'react'
import './App.css'
import ItemList from './components/ItemList'
import AddItem from './components/AddItem'

function App() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchItems()
  }, [])

  const fetchItems = async () => {
    try {
      setLoading(true)
      const response = await fetch('/api/items')
      const data = await response.json()
      setItems(data)
    } catch (err) {
      setError('Failed to fetch items')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const handleAddItem = async (title, description) => {
    try {
      const response = await fetch('/api/items', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title, description })
      })
      const newItem = await response.json()
      setItems([...items, newItem])
    } catch (err) {
      setError('Failed to add item')
      console.error(err)
    }
  }

  return (
    <div className='container'>
      <h1>FullStack App</h1>
      <AddItem onAdd={handleAddItem} />
      {error && <p className='error'>{error}</p>}
      {loading ? <p>Loading...</p> : <ItemList items={items} />}
    </div>
  )
}

export default App
