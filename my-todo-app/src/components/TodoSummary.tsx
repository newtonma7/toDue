import type {Todo} from "../types/todo"

interface TodoSummaryProps{
    todos: Todo[]
    deleteAllCompleted: () => void;
}

export default function TodoSummary({todos, deleteAllCompleted} : TodoSummaryProps){
    const completedTodos = todos.filter(todo => todo.completed);

    return(
        <div className="text-center space y-2">
            <p>
                {completedTodos.length}/{todos.length} todos completed
            </p>
            {completedTodos.length > 0 && (
                <button 
                onClick ={deleteAllCompleted}
                className = "mt-2.5 text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
                >
                    Delete all completed
                </button>
            )}
        </div>
    )
        
    
}