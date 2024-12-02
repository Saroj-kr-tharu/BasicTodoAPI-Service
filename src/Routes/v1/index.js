const express = require('express');
const {
    readTodosController,
    createTodoController,
    getTodoController,
    updateTodoController,
    deleteTodoController

} = require('../../Controllers/todoController');

const {validateCreateTodo, validateUpdateTodo, validateDeleteTodo} = require("../../Middlewares/todoMIddleware");

const router = express.Router();

router.get('/', (req,res) => {
    return res.status(200).json({
        success:'true',
        err:{},
        message:"welcome bro to Todos app",
        data:{}
    })
});

router.get('/Todos', readTodosController );
router.post('/create',validateCreateTodo ,createTodoController);
router.get('/todo',getTodoController);
router.patch('/todoUpdate',validateUpdateTodo ,updateTodoController);
router.delete('/deleteTodo',validateDeleteTodo, deleteTodoController);

module.exports= router;