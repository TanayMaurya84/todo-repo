const zod=require("zod")

//Schema for creation of object
const createTodo=zod.object({
    title:zod.string(),
    description:zod.string()
})

//Schema for updation of a todo
const updateTodo=zod.object({
    id:zod.string()
})

module.exports={
    createTodo:createTodo,
    updateTodo:updateTodo
}


