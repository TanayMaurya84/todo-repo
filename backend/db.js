/*
    Schema is:
    Todo {
        title:string
        description:string
        completed:boolean
    }
*/

const mongoose=require("mongoose")

mongoose.connect("mongodb+srv://tanaymaurya6704:TanayMongoDB6704@cluster0.1e24twr.mongodb.net/todos")

//introducing schema
const todoSchema=mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
})

//creating model
const todo=mongoose.model('todos',todoSchema)

module.exports={
    todo
}
