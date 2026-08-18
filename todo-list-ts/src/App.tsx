import React, { type JSX } from 'react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { type ListOfTodos } from './types'

const mockTodos = [
  {
    id: '1',
    title: 'todo 1',
    completed: false,
  },
  {
    id: '2',
    title: 'todo 2',
    completed: false,
  },
  {
    id: '3',
    title: 'todo 3',
    completed: false,
  }
]

const App = (): JSX.Element => {
  const[todos] = useState(mockTodos)
  return (
    <div className="todoApp">
  <Todos todos={todos}/>
  </div>
)
}

export default App
