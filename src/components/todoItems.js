import React, { useReducer, useState } from 'react'
import todoReducer from '../reducers/todoReducer'
import todoContext from '../contexts/todoContext'
import ToDoSummary from './todoSummary'

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

  const addToDoItem = item =>
    dispatch({ type: 'add', payload: { ...item, id: nextId() } })
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
      <button onClick={() => addToDoItem({ title: newItem })}>add</button>
      &nbsp;({`next index: ${nextId()}`})
      <todoContext.Provider value={{ state, addToDoItem }}>
        <ToDoSummary></ToDoSummary>
      </todoContext.Provider>
    </div>
  )
}
