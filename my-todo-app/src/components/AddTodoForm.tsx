import { useState } from "react"

interface AddTodoFormProps {
    onSubmit: (title: string) => void;

}

export default function AddTodoForm({onSubmit}: AddTodoFormProps){

    const [input, setInput] = useState('');

    function handleSubmit(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        
        if(!input.trim()){
            return;
        }

        onSubmit(input);
        setInput("");

    }


    return(
        <form className="flex" onSubmit = {handleSubmit}>
            <input 
            value={input}
            onChange= {(e) => setInput(e.target.value)}
            placeholder="What needs to be done?" 
            className="rounded-md grow border-gray-400 p-2 mr-2.5 hover:border-2">
                
            </input>
            <button 
            type="submit"
            className= "w-16 rounded-md bg-slate-900 text-white hover:bg-slate-800">
                Add
            </button>
        </form>
    )
}