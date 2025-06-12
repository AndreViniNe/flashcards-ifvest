'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('flashcards', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      pergunta: { type: Sequelize.TEXT },
      resposta: { type: Sequelize.TEXT },
      materia_id: { type: Sequelize.INTEGER },
      subtopico_id: { type: Sequelize.INTEGER },
      dificuldade_id: { type: Sequelize.INTEGER },
      createdAt: { type: Sequelize.DATE },
      updatedAt: { type: Sequelize.DATE }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('flashcards');
  }
};
