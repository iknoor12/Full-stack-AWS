import './ItemList.css'

function ItemList({ items }) {
  return (
    <div className='item-list'>
      <h2>Items ({items.length})</h2>
      {items.length === 0 ? (
        <p>No items yet. Add one to get started!</p>
      ) : (
        <ul>
          {items.map((item) => (
            <li key={item.id} className='item-card'>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <small>ID: {item.id}</small>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default ItemList
