module.exports = (sequelize, DataTypes) => {
  const Subtopico = sequelize.define('Subtopico', {
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, {
    tableName: 'subtopicos'  // 👈 define o nome real da tabela
  });

  Subtopico.associate = models => {
    Subtopico.belongsTo(models.Materia);
    Subtopico.hasMany(models.Flashcard);
  };

  return Subtopico;
};
