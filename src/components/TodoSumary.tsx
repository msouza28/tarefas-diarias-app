import { Todo } from "../types/todos";

interface TodoSumaryProps {
    todos: Todo[];
    deleteAllCompleted: () => void;
}

export default function TodoSumary({todos, deleteAllCompleted}: TodoSumaryProps){

    const completedTodos = todos.filter(todo => todo.completed);

    return(
        <div className="text-center space-y-2">
            <p className="text-sm font-medium">
                {completedTodos.length} / {todos.length} tarefas concluidas.
            </p>
            {completedTodos.length > 0 && (
                <button
                onClick={deleteAllCompleted}
                className="text-red-400 hover:underline text-sm font-medium">
                    Deletar tarefas concluídas.
                </button>
            )}
        </div>
        
    )

}