const { Sequelize, DataTypes } = require('sequelize');
const config = require(__dirname + '/../config/config.json')['development'];

const sequelize = new Sequelize(config.database, config.username, config.password, config);

const db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

// Import models
db.Area = require('./area')(sequelize, DataTypes);
db.Topico = require('./Topico')(sequelize, DataTypes);
db.Dificuldade = require('./Dificuldade')(sequelize, DataTypes);
db.Flashcard = require('./Flashcard')(sequelize, DataTypes);

// Set up associations
if (db.Area.associate) db.Area.associate(db);
if (db.Topico.associate) db.Topico.associate(db);
if (db.Dificuldade.associate) db.Dificuldade.associate(db);
if (db.Flashcard.associate) db.Flashcard.associate(db);

module.exports = db;
