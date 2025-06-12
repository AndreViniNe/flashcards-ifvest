module.exports = (sequelize, DataTypes) => {
  const Dificuldade = sequelize.define('Dificuldade', {
    nivel: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, {
    tableName: 'dificuldades'  // 👈 define o nome real da tabela
  });

  Dificuldade.associate = models => {
    Dificuldade.hasMany(models.Flashcard);
  };

  return Dificuldade;
};
