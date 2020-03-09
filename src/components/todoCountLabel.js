import React, { useContext, Fragment } from 'react'
import todoContext from '../contexts/todoContext'

export default () => {
  const { state, addToDoItem } = useContext(todoContext)

  return (
    <Fragment>
      {state.length} to-do item{state.length > 1 ? 's' : ''}
      <button onClick={() => addToDoItem({ title: 'sleep!!!' })}>
        Remember to sleep.
      </button>
    </Fragment>
  )
}
