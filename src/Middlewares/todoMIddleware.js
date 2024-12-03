const { ClientErrorCode } = require("../utlis/https_codes");


const validateUpdateTask = (req, res, next) => {

    const updateKeys = ['title', 'description',
         'priority', 'status', 'dueDate', 'startDate', 'endDate', 
         'createdAt', 'completedAt'];

    if (
        !req.query.id
        ||
        (!Object.keys(req.body).some(key => updateKeys.includes(key))
        )

    ) {
        return res.status(ClientErrorCode.BAD_REQUEST).json({
            message: 'Invalid request for update Task',
            err: 'Missing mandatory properties to update Task ',
            data: {},
            success: false
        })
    }

    next();
}

const validateCreateTask = (req, res, next) => {

    if (
        !req.body.title ||
        !req.body.description
    ) {

        return res.status(ClientErrorCode.BAD_REQUEST).json({
            message: 'Invalid request for create Todo',
            err: 'Missing mandatory properties to create Todo ',
            data: {},
            success: false

        });

    }

    next();
}

const validateDeleteTask = (req, res, next) => {

    if (!req.query.id) {
        return res.status(ClientErrorCode.BAD_REQUEST).json({
            message: 'Invalid request for delete Task',
            err: 'Missing mandatory properties to delete Task ',
            data: {},
            success: false

        });
    }

    next();
}

const validateFilterTask = (req, res,next)  => {
    const updateKeys = ['title', 'description',
        'priority', 'status', 'dueDate', 'startDate', 'endDate', 
        'createdAt', 'completedAt'];

   if (
       !req.query.id
       ||
       (!Object.keys(req.body).some(key => updateKeys.includes(key))
       )

   ) {
       return res.status(ClientErrorCode.BAD_REQUEST).json({
           message: 'Invalid request for update Task',
           err: 'Missing mandatory properties to update Task ',
           data: {},
           success: false
       })
   }

   next();
}

module.exports = {
    validateCreateTask,
    validateUpdateTask,
    validateDeleteTask,
    validateFilterTask
}