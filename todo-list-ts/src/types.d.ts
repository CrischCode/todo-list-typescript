import { type Todo } from "../types"
export interface Todo {
  id: number
  title: string
  completed: boolean
}


export type ListOfTodos = Todo[]