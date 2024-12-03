const { TaskRepository } = require('../Repository/index');

const { formatDate } = require('../utlis/index');

const curd = new TaskRepository();

const createTaskService = (data) => {
    try {

        const datares = curd.create(data);
        return datares;

    } catch (error) {
        console.log('Something Went wrong in Service layer creating todo');
        throw error;
    }

}

const readTaskService = async () => {
    try {
        const data = await curd.getAll();
        return data;

    } catch (error) {
        console.log('Something Went wrong in Service layer (getAll) todo');
        throw error;
    }
}

const getTaskService = async (id) => {
    try {
        const data = await curd.getById(id);
        return data;

    } catch (error) {
        console.log('Something Went wrong in Service layer (getById)');
        throw error;
    }
}

const updateTaskService = async (id, data) => {
    try {
       
        const response = await curd.update(id, data);
        return response;

    } catch (error) {
        console.log('Something Went wrong in Service layer (updating) ');
        throw error;
    }
}

const deleteTaskService = async (id, data) => {
    try {
        const response = await curd.delete(id, data);
        return response;

    } catch (error) {
        console.log('Something Went wrong in Service layer (delete)');
        throw error;
    }
}

const filterTaskService = async (data) => {
    try {
        const response = await curd.filter(data);
        return response;

    } catch (error) {
        console.log('Something Went wrong in Service layer (filter)');
        throw error;
    }
}
module.exports = {
    createTaskService,
    readTaskService,
    getTaskService,
    updateTaskService,
    deleteTaskService,
    filterTaskService
}