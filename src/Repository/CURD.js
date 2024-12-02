


const fs = require('fs');
const path = require('path');
const {formatDate}= require('../utlis/index');

class CRUD {

    constructor() {
        this.FILE_PATH = path.join(__dirname, '../LocalData/Todo_Data.js');
        this.#existFile();
        this.TodoData = this.#loadData();

    }

    #existFile() {
        this.FILE_PATH = path.join(__dirname, '../LocalData/Todo_Data.js');

        const folderPath = path.join(__dirname, '../LocalData');

        if (!fs.existsSync(folderPath)) {
            console.log("folder is not present ");
            console.log("folder creating ");
            fs.mkdirSync(folderPath, { recursive: true });
        }

        if (!fs.existsSync(this.FILE_PATH)) {
            console.log(' file is not present ...');


            const data = `const TodoData = [];\n\nmodule.exports = TodoData;`;
            fs.writeFileSync(this.FILE_PATH, data);
            console.log(' file is creating present ...');
        }

    }

    #saveData() {
        const fileContent = `const TodoData = ${JSON.stringify(this.TodoData, null, 4)};\n\nmodule.exports = TodoData;`;

        fs.writeFileSync(this.FILE_PATH, fileContent, 'utf8');
    }

    #loadData() {
        delete require.cache[this.FILE_PATH]
        return require(this.FILE_PATH);
    }


    createTodos(data) {
        try {
            this.TodoData.push(data);
            this.#saveData();
            console.log('Successfully Created a new Todos');

            return this.TodoData[this.TodoData.length -1];
        } catch (error) {
            console.log('Something went wrong in creating todo repository level ');
            throw error;
        }
    }

    readTodos = () => {
        try {
            return this.TodoData;
        } catch (error) {
            console.log('Something went wrong in reading todo repository level ');
            throw error;
        }
    }

    getTodo = (id) => {
        try {
            const item = this.TodoData.find((item) => item.id === id);

            if (item) {
                console.log(item);
                return item;
            }

            return false;
        } catch (error) {
            console.log('Something went wrong in get todo repository level ');
            throw error;
        }
    }

    updateTodo= (id,data) => {
        try {

          
            const itemIndex = this.TodoData.findIndex( (item) => item.id === id );

            if(itemIndex === -1)
                    return false;
           
            const updateTodo = {
                ...this.TodoData[itemIndex],
                ...data,
                updatedAt:formatDate()
            }
           
            this.TodoData[itemIndex] = updateTodo;
            this.#saveData();

            return updateTodo;

        } catch (error) {
            console.log('Something went wrong in updating todo repository level ');
            throw error;
        }
    }
    
    deleteTodo= (id) => {
        try {
            const itemIndex = this.TodoData.findIndex( (item) => item.id === id );

            if(itemIndex === -1)
                    return false;

          
        this.TodoData= this.TodoData.filter(item => item.id !== id);

            this.#saveData();
       

            const msg=  `Todo with id ${id} removed successfully`;

            return msg;

        } catch (error) {
            console.log('Something went wrong in deleteing todo repository level ');
            throw error;
        }
    }
}

module.exports = CRUD;