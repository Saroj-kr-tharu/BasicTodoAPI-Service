const {
    readTodosService,
    createTodoService,
    getTodoService,
    updateTodoService,
    deleteTodoService
} = require('../Services/TodoService');

const {SuccessCode, ClientErrorCode, ServerErrorCode} = require("../utlis/https_codes");

const readTodosController = async (req, res) => {
    try {
        const datas = await readTodosService();
        return res.status(SuccessCode.OK).json({
            message: 'Successfully feteched the data',
            success: true,
            data: datas,
            err: {}
        })



    } catch (error) {
        console.log('Something went wrong in controller level in reading ');

        return res.status(ServerErrorCode.INTERNAL_SERVER).json({
            message: 'Failed to feteched the data',
            success: false,
            data: {},
            err: {}
        })

    }
}

const createTodoController = async (req, res) => {
    try {
        const data = req.body;

        const response = await createTodoService(data);

        return res.status(SuccessCode.CREATED).json({
            message: 'Successfully created the data',
            success: true,
            data: response,
            err: {}
        })



    } catch (error) {
        console.log('Something went wrong in controller level in reading ');

        return res.status(ServerErrorCode.NOT_IMPLEMENT).json({
            message: 'Failed to create new todo',
            success: false,
            data: {},
            err: error.message || error
        })

    }
}


const getTodoController = async (req, res) => {
    try {
        const data = req.query.id;
        // console.log(data);

        const response = await getTodoService(data);

        let msg = 'Successfully fetch  data';
        if (!response)
            msg = "data is not present "

        return res.status(SuccessCode.OK).json({
            message: msg,
            success: true,
            data: response,
            err: {}
        })

    } catch (error) {
        console.log('Something went wrong in controller level in get todo  ');

        return res.status(ServerErrorCode.INTERNAL_SERVER).json({
            message: 'Failed to fetch  todo',
            success: false,
            data: {},
            err: error.message || error
        })

    }
}

const updateTodoController = async (req, res) => {
    try {
        const id = req.query.id;
        const data = req.body;

        const response = await updateTodoService(id, data);
        return res.status(SuccessCode.OK).json({
            message: "Successfully update todo",
            success: true,
            data: response,
            err: {}
        })

    } catch (error) {
        console.log('Something went wrong in controller level in update todo  ');

        return res.status(ServerErrorCode.INTERNAL_SERVER).json({
            message: 'Failed to fetch  todo from controller',
            success: false,
            data: {},
            err: error.message || error
        })

    }
}

const deleteTodoController = async (req, res) => {
    try {
        const id = req.query.id;

        const response = await deleteTodoService(id);

        let msg = "Successfully delete todo";
        if (!response)
            msg = "id is not present";

        return res.status(SuccessCode.OK).json({
            message: msg,
            success: true,
            data: response,
            err: {}
        })

    } catch (error) {
        console.log('Something went wrong in controller level in deleting todo  ');

        return res.status(ServerErrorCode.INTERNAL_SERVER).json({
            message: 'Failed to delete  todo from controller',
            success: false,
            data: {},
            err: error.message || error
        })
    }
}

module.exports = {
    readTodosController,
    createTodoController,
    getTodoController,
    updateTodoController,
    deleteTodoController
}