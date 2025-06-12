module.exports = (sequelize, DataTypes) => {
  const Materia = sequelize.define('Materia', {
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, {
    tableName: 'materias'  // 👈 define o nome real da tabela
  });

  Materia.associate = models => {
    Materia.hasMany(models.Subtopico);
    Materia.hasMany(models.Flashcard);
  };

  return Materia;
};
