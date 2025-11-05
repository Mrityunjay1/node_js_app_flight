'use strict';

const { Op } = require("sequelize");

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

    await queryInterface.bulkInsert('Airplanes', [
      {
        modelNumber: 'A320',
        capacity: 180,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        modelNumber: 'A330',
        capacity: 200,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        modelNumber: 'A350',
        capacity: 250,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('Airplanes', null, {});
     */
    await queryInterface.bulkDelete('Airplanes', {
      modelNumber: {
        [Op.or]: ['A320']
      }
    });
  }
};
