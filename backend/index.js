const express=require("express")
const cors=require("cors")

const {createTodo}=require("./types") //importing schema from types.js file
const {updateTodo}=require("./types") 
const {todo}=require("./db")
const port=3000
const app=express()


app.use(express.json())
app.use(cors()) // this allows request from all frontends

app.post('/create-todo',async function(req,res){
    //const input=createTodo.safeParse(req.body)
    //OR

    const createPayload=req.body;
    const parsedPayload=createTodo.safeParse(createPayload)

    if(!parsedPayload.success){
        //res.send("Invalid input")
        //OR

        res.status(411).json({
            msg:"You sent the wrong inputs"
        })
        
        return;
    }
    //After validation,sending it to mongodb
    await todo.create({     //await is put because if DB fails to return data,then also
                           // it will return "Todo created" 
        title:createPayload.title, //not parsedPayload
        description:createPayload.description,
        completed:false
    })
    res.json({
        msg:"Todo created"
    })


})
app.get('/todos',async function(req,res){
    const todos=await todo.find({}) //async call to fetch data from MongoDB
     
    res.json({
        todos
    })
})

app.put('/completed',async function(req,res){  
    const updatePayload=req.body
    const parsedPayload=updateTodo.safeParse(updatePayload)

    if(!parsedPayload.success){
        res.status(411).json({
            msg:"You sent the wrong inputs"
        })
        return;
    }


    //updating has two parameters:
    //1. checking that _id in DB is equal to req.body.id
    //2. data and its value to be updated

    await todo.update({  
        _id:req.body.id
    },{
        completed:true
    })
    res.json({
        msg:"Todo has been marked completed"
    })
})

app.listen(port,function(){
    console.log(`App is ruunning on port ${port}`)
})
