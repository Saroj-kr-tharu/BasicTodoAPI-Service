const { Op } = require("sequelize");


class CURDRepo {
    constructor(model) {
        this.Task= model
    }

    async create(data) {
        try { 
            const res = await this.Task.create(data);
            return res;
        } catch (error) {
            console.log("Something Went Wrong in REPOSITORY level (create) ");
            throw error;
        }
    }

    async delete(idData) {
        try {
            const res = await this.Task.destroy({
                where: {
                    id: idData
                },
            })
            return res;
        } catch (error) {
            console.log("Something Went Wrong in REPOSITORY level (delete) ");
            throw error;
        }
    }

    async getAll() {
        try {
            const res = await this.Task.findAll()
            return res;
        } catch (error) {
            console.log("Something Went Wrong in REPOSITORY level (getAll) ");
            throw error;
        }
    }

    async getById(dataId) {
        try {
            const res = await this.Task.findAll({
                where: {
                    id: dataId
                }
            });
            return res;
        } catch (error) {
            console.log("Something Went Wrong in REPOSITORY level (getById) ");
            throw error;
        }
    }


    async update(dataId, data) {
        try {
            const res = await this.Task.update(data, {
                where: {
                    id: dataId
                }
            });
            return res;
        } catch (error) {
            console.log("Something Went Wrong in REPOSITORY level (getById) ");
            throw error;
        }
    }


    async filter(data) {
        try {
            console.log(data);

            let condn = {};

            if (data.id)
                condn.id = data.id;

            if (data.title)
                condn.title = { [Op.like]: `${data.title}%` };

            if (data.status)
                condn.status = data.status;

            if (data.priority)
                condn.priority = data.priority;

            if (data.startDate && data.endDate) {
                const startDate = new Date(data.startDate).setHours(0, 0, 0, 0);
                const endDate = new Date(data.endDate).setHours(23, 59, 59, 999);
                condn.createdAt = {
                    [Op.between]: [startDate, endDate],
                };


            }

            const res = await this.Task.findAll({
                where: condn,
                order: [['createdAt', 'DESC']]
            });
            return res;
        } catch (error) {
            console.log("Something Went Wrong in REPOSITORY level (getById) ");
            throw error;
        }
    }

}

module.exports = CURDRepo;