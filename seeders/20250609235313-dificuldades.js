'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('dificuldades', [
  {
    "id": 1,
    "nivel": "Fácil",
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": 2,
    "nivel": "Médio",
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  {
    "id": 3,
    "nivel": "Difícil",
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  }
], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Dificuldades', null, {});
  }
};
