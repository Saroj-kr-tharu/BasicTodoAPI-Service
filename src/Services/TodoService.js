const { CURD_Repo } = require('../Repository/index');
const { v4: uuidv4 } = require('uuid');

const { formatDate } = require('../utlis/index');

const curd = new CURD_Repo();

const createTodoService = (data) => {
    try {
        const ids = uuidv4();

        const conData = {
            id: ids,
            title: data.title,
            completed: data.completed,
            description: data.description,
            createdAt: formatDate(),
            updatedAt: formatDate()
        }


        // console.log(conData);
        const datares = curd.createTodos(conData);
        return datares;

    } catch (error) {
        console.log('Something Went wrong in Service layer creating todo');
        throw error;
    }

}

const readTodosService = async () => {
    try {
        const data = await curd.readTodos();
        return data;

    } catch (error) {
        console.log('Something Went wrong in Service layer creating todo');
        throw error;
    }
}

const getTodoService = async (id) => {
    try {
        const data = await curd.getTodo(id);
        return data;

    } catch (error) {
        console.log('Something Went wrong in Service layer creating todo');
        throw error;
    }
}

const updateTodoService = async (id, data) => {
    try {
        const predata = await curd.getTodo(id);
        if (!predata)
            return false;


        const response = await curd.updateTodo(id, data);
        return response;

    } catch (error) {
        console.log('Something Went wrong in Service layer updating  todo');
        throw error;
    }
}

const deleteTodoService = async (id, data) => {
    try {
        const predata = await curd.getTodo(id);
        if (!predata)
            return false;

        const response = await curd.deleteTodo(id, data);


        return response;

    } catch (error) {
        console.log('Something Went wrong in Service layer updating  todo');
        throw error;
    }
}

module.exports = {
    createTodoService,
    readTodosService,
    getTodoService,
    updateTodoService,
    deleteTodoService
}