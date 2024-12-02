const {ClientErrorCode} = require("../utlis/https_codes");

const validateUpdateTodo = (req, res, next) => {

    if (
        !req.query.id
        ||
        (!req.body.title &&
            !req.body.description &&
            !req.body.completed)


    ) {
        return res.status(ClientErrorCode.BAD_REQUEST).json({
            message: 'Invalid request for update Todo',
            err: 'Missing mandatory properties to update Todo ',
            data: {},
            success: false
        })
    }

    next();
}

const validateCreateTodo = (req, res, next) => {

    if (
        !req.body.title ||
        !req.body.description ||
        !req.body.completed
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

const validateDeleteTodo = (req, res, next) => {

    if (!req.query.id) {
        return res.status(ClientErrorCode.BAD_REQUEST).json({
            message: 'Invalid request for delete Todo',
            err: 'Missing mandatory properties to delete Todo ',
            data: {},
            success: false

        });
    }

    next();
}


module.exports = {
    validateCreateTodo,
    validateUpdateTodo,
    validateDeleteTodo
}