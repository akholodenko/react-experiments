import React, { useReducer, useState } from 'react'
import todoReducer from '../reducers/todoReducer'

const items = [
  {
    id: 1,
    title: 'item 1'
  },
  {
    id: 2,
    title: 'item 2'
  }
]

export default () => {
  const [state, dispatch] = useReducer(todoReducer, items)
  const [newItem, setNewItem] = useState('')

  const addToDoItem = item => dispatch({ type: 'add', payload: item })
  const removeToDoItem = itemId => dispatch({ type: 'remove', payload: itemId })

  return (
    <div>
      {state.map((item, index) => (
        <div key={index}>
          {item.title}
          <button onClick={() => removeToDoItem(item.id)}>remove</button>
        </div>
      ))}
      <input
        id="newToDo"
        type="text"
        value={newItem}
        onChange={e => setNewItem(e.target.value)}
        autoComplete="none"
      />{' '}
      <button
        onClick={() => addToDoItem({ id: state.length + 1, title: newItem })}
      >
        add
      </button>
    </div>
  )
}
