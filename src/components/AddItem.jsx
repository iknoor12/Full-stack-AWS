import { useState } from 'react'
import './AddItem.css'

function AddItem({ onAdd }) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (title.trim() && description.trim()) {
      onAdd(title, description)
      setTitle('')
      setDescription('')
    }
  }

  return (
    <form onSubmit={handleSubmit} className='add-item-form'>
      <input
        type='text'
        placeholder='Item title'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder='Item description'
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      ></textarea>
      <button type='submit'>Add Item</button>
    </form>
  )
}

export default AddItem
