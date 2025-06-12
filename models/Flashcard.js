module.exports = (sequelize, DataTypes) => {
  const Flashcard = sequelize.define('Flashcard', {
    pergunta: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    resposta: {
      type: DataTypes.TEXT,
      allowNull: false,
    }
  }, {
    tableName: 'flashcards'  // 👈 define o nome real da tabela
  });

  Flashcard.associate = models => {
    Flashcard.belongsTo(models.Materia);
    Flashcard.belongsTo(models.Subtopico);
    Flashcard.belongsTo(models.Dificuldade);
  };

  return Flashcard;
};
