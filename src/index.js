const express = require('express');
const bodyParser = require('body-parser');

const {PORT} = require('./serverConfig/serverConfig');
const ApiRoutes = require('./Routes/index');

const {CURD_Repo} = require('./Repository/index');
const curd = new CURD_Repo;



const serverSetupStart =  () => {
    const app = express();
    

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true }));
    app.use('/api', ApiRoutes);
   

    app.listen( PORT, ()=> {
        console.log(`Server Started at ${PORT}`);
        // curd.getTodo('8db921d1-f1b6-4854-a95a-09e4932f2f94');
        // curd.createTodos(data);
        // readTodosController();
    } )
}


serverSetupStart();

