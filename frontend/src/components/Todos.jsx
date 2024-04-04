//for rendering Todos
import{useState} from "react";
export function Todo({todos}){
    return(
    <div>
    {todos.map(function(todo){
        return <div>
        <div>{todo.title}</div>
        <div>{todo.description}</div>
        <button>{todo.completed==true?"Completed":"Mark as Completed"}</button>
        </div>
           
    })}
    
    </div>
    )
}  //todos is array of all todo

