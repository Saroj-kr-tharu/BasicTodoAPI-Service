'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */



    await queryInterface.bulkInsert('tasks', [

      {
        title: 'Music class',
        description: " Music class at  " ,
        status:"pending",
        priority:"low",
        dueDate:new Date(),
        completedAt: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Dance class',
        description: " Dance class at  " ,
        status:"complete",
        priority:"meduim",
        dueDate:new Date(),
        completedAt: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Mobile Repair',
        description: " Mobile Repairing at 2500 cost " ,
        status:"incomplete",
        priority:"high",
        dueDate:new Date(),
        completedAt: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Bank Deposit',
        description: " Bank Deposit 25000  " ,
        status:"complete",
        priority:"low",
        dueDate:new Date(),
        completedAt: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      
    
      

    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
