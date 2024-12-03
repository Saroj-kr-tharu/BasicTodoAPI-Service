const {
    readTaskService,
    createTaskService,
    getTaskService,
    updateTaskService,
    deleteTaskService,
    filterTaskService
} = require('../Services/TodoService');

const {SuccessCode, ClientErrorCode, ServerErrorCode} = require("../utlis/https_codes");

const readTaskController = async (req, res) => {
    try {
        const datas = await readTaskService();
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

const createTaskController = async (req, res) => {
    try {
        const data = req.body;

        const response = await createTaskService(data);

        return res.status(SuccessCode.CREATED).json({
            message: 'Successfully created the data',
            success: true,
            data: response,
            err: {}
        })



    } catch (error) {
        console.log('Something went wrong in controller level in (create) ');

        return res.status(ServerErrorCode.NOT_IMPLEMENT).json({
            message: 'Failed to create new task',
            success: false,
            data: {},
            err: error.message || error
        })

    }
}


const getTaskController = async (req, res) => {
    try {
        const data = req.query.id;
        // console.log(data);

        const response = await getTaskService(data);

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
        console.log('Something went wrong in controller level in get task  ');

        return res.status(ServerErrorCode.INTERNAL_SERVER).json({
            message: 'Failed to fetch  task',
            success: false,
            data: {},
            err: error.message || error
        })

    }
}

const updateTaskController = async (req, res) => {
    try {
        const id = req.query.id;
        const data = req.body;

        const response = await updateTaskService(id, data);
        return res.status(SuccessCode.OK).json({
            message: "Successfully update task",
            success: true,
            data: response,
            err: {}
        })

    } catch (error) {
        console.log('Something went wrong in controller level in update todo  ');

        return res.status(ServerErrorCode.INTERNAL_SERVER).json({
            message: 'Failed to fetch  task from controller',
            success: false,
            data: {},
            err: error.message || error
        })

    }
}

const deleteTaskController = async (req, res) => {
    try {
        const id = req.query.id;

        const response = await deleteTaskService(id);

        let msg = "Successfully delete task";
        if (!response)
            msg = "id is not present";

        return res.status(SuccessCode.OK).json({
            message: msg,
            success: true,
            data: response,
            err: {}
        })

    } catch (error) {
        console.log('Something went wrong in controller level in deleting task  ');

        return res.status(ServerErrorCode.INTERNAL_SERVER).json({
            message: 'Failed to delete  todo from controller',
            success: false,
            data: {},
            err: error.message || error
        })
    }
}

const filterTaskController = async (req, res) => {
    try {
        const data = req.body;

        const response = await filterTaskService(data);
        
        let msg = "Successfully Fetched filter task";
        if (!response)
            msg = "data  is not present";

        return res.status(SuccessCode.OK).json({
            message: msg,
            success: true,
            data: response,
            err: {}
        })

    } catch (error) {
        console.log('Something went wrong in controller level in deleting task  ');

        return res.status(ServerErrorCode.INTERNAL_SERVER).json({
            message: 'Failed to delete  todo from controller',
            success: false,
            data: {},
            err: error.message || error
        })
    }
}

module.exports = {
    readTaskController,
    createTaskController,
    getTaskController,
    updateTaskController,
    deleteTaskController,
    filterTaskController
}