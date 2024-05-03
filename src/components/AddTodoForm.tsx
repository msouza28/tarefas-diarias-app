import { CirclePlus } from "lucide-react";
import { useState } from "react"

interface AddTodoFormsProps {
    onSubmit: (title: string) => void;
}
export default function AddTodoForm({onSubmit}: AddTodoFormsProps){

    const [input, setInput] = useState("")

    function handleSubmit(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();

        if(!input.trim()) return;

        onSubmit(input);
        setInput("");

    }

    return(
        <form className="flex" onSubmit={handleSubmit}>
            <input value={input} 
            onChange={(e) => setInput(e.target.value)}
            placeholder="O que precisa ser feito hoje?"
            className="rounded-s-md grow border border-gray-400 p-2" 
            />
            <button type="submit"
            className="w-16 rounded-e-md bg-slate-900 text-white hover:bg-slate-800 flex items-center justify-center">
                <CirclePlus />
            </button>
        </form>
    )
}