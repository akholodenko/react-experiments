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
  const nextId = () => {
    return state.length ? [...state].sort((a, b) => b.id - a.id)[0].id + 1 : 1
  }

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
      />
      {`next index ${nextId()}`}
      <button onClick={() => addToDoItem({ id: nextId(), title: newItem })}>
        add
      </button>
    </div>
  )
}
