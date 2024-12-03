const express = require('express');
const {
    readTaskController,
    createTaskController,
    getTaskController,
    updateTaskController,
    deleteTaskController,
    filterTaskController
    

} = require('../../Controllers/todoController');

const {validateCreateTask, validateUpdateTask, validateDeleteTask, validateFilterTask} = require("../../Middlewares/todoMIddleware");

const router = express.Router();

router.get('/', (req,res) => {
    return res.status(200).json({
        success:'true',
        err:{},
        message:"welcome bro to Todos app",
        data:{}
    })
});

router.get('/getAllTask', readTaskController );
router.post('/createTask',validateCreateTask ,createTaskController);
router.get('/taskById',getTaskController);
router.patch('/updateTask',validateUpdateTask ,updateTaskController);
router.delete('/deleteTask',validateDeleteTask, deleteTaskController);
router.get('/filterTask', validateFilterTask,filterTaskController);

module.exports= router;