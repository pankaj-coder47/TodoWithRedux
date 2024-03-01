import { useState } from "react"
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todo/todoSlice'
import Theme from "./Theme";

function AddTodo() {
    const [input, setInput] = useState('');
    const dispatch = useDispatch()

    const addTodoHandler = (e) => {
        e.preventDefault();
        dispatch(
            addTodo(input)
        )
        setInput('')
    }
    return (
        <div className="mx-auto max-w-fit">
            <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
                <input
                    type="text"
                    className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    placeholder="Enter a Todo..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button
                    type="submit"
                    className={`text-white ${ input ? 'bg-indigo-500 hover:bg-indigo-600 ': 'bg-zinc-600 cursor-not-allowed' } border-0 py-2 px-6 focus:outline-none rounded text-lg`}
                    disabled={!input}
                >
                    Add Todo
                </button>
            </form>
            <Theme/>
        </div>
    )
}

export default AddTodo
