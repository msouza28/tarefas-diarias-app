import { useState } from "react";
import { dummyData } from "./data/todos";
import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";
import TodoSumary from "./components/TodoSumary";

export default function App() {

const [todos, setTodos] = useState(dummyData)

function setTodoCompleted(id:number, completed:boolean){
  setTodos((prevTodos) => 
    prevTodos.map((todo) => (todo.id === id ? {...todo, completed} : todo))
);
}

function addTodo(title: string) {
  setTodos(prevTodos => [
    {
      id: Date.now(),
      title,
      completed: false
    },
    ...prevTodos,
  ])
}

function deleteTodo(id:number){
  setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id))
}

function deleteAllCompletedTodos(){
  setTodos(prevTodos => prevTodos.filter(todo => !todo.completed));
}

  return (
    <main className="py-10 h-screen space-y-5 overflow-y-auto">
      <h1 className="font-bold text-3xl text-center uppercase">Diarefas</h1>
      <div className="max-w-screen-lg mx-auto bg-slate-200 rounded-md p-5 space-y-6">
        <AddTodoForm onSubmit={addTodo} />
        <TodoList 
        todos={todos}
        onCompletedChange={setTodoCompleted}
        onDelete={deleteTodo}
        />
      </div>
      <TodoSumary 
      todos={todos}
      deleteAllCompleted={deleteAllCompletedTodos}      
      />
    </main>
  )
}