// file for creating components(HTML elements)
import{useState} from "react";
export function CreateTodo(){
    const [title,setTitle]=useState("")
    const [description,setDescription]=useState("")

    return(
        <div>
            <input type="text" placeholder="title" onChange={function(e){
                const value=e.target.value;
                setTitle(e.target.value)
            }}></input><br/>
            <input type="text" placeholder="description" onChange={function(e){
                const value=e.target.value;
                setDescription(e.target.value)
            }}></input><br/>
            <button onClick={function(){
                fetch("http://localhost:3000/create-todos",{
                    method:"POST",
                    body:JSON.stringify({
                        title:title,     //here document.get should not be used
                        description:description
                    }),
                    headers:{
                        "contentType":"application/json"
                    }

                })
                .then(async function(res){
                    const json=await res.json();
                    alert("Todo created")

                    
                })

            }

                
            }>Add a Todo</button>
        </div>
    )
    
}
