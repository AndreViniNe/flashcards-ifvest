const { Sequelize, DataTypes } = require('sequelize');
const config = require(__dirname + '/../config/config.json')['development'];

const sequelize = new Sequelize(config.database, config.username, config.password, config);

const db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

// Importar models
db.Materia = require('./Materia')(sequelize, DataTypes);
db.Subtopico = require('./Subtopico')(sequelize, DataTypes);
db.Dificuldade = require('./Dificuldade')(sequelize, DataTypes);
db.Flashcard = require('./Flashcard')(sequelize, DataTypes);

// Definir associações
db.Materia.hasMany(db.Subtopico, { foreignKey: 'materia_id' });
db.Subtopico.belongsTo(db.Materia, { foreignKey: 'materia_id' });

db.Materia.hasMany(db.Flashcard, { foreignKey: 'materia_id' });
db.Subtopico.hasMany(db.Flashcard, { foreignKey: 'subtopico_id' });
db.Dificuldade.hasMany(db.Flashcard, { foreignKey: 'dificuldade_id' });

db.Flashcard.belongsTo(db.Materia, { foreignKey: 'materia_id' });
db.Flashcard.belongsTo(db.Subtopico, { foreignKey: 'subtopico_id' });
db.Flashcard.belongsTo(db.Dificuldade, { foreignKey: 'dificuldade_id' });

module.exports = db;
