'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Dificuldade', [
  {
    "id_dificuldade": 1,
    "nivel": "Fácil",
  },
  {
    "id_dificuldade": 2,
    "nivel": "Médio",
  },
  {
    "id_dificuldade": 3,
    "nivel": "Difícil",
  }
], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Dificuldade', null, {});
  }
};
