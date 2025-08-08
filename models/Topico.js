const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {

    class Topico extends Model {
        static associate(models) {
          this.belongsTo(models.Area, { foreignKey: 'id_area', as: 'Area' });
          this.hasMany(models.Flashcard, {foreignKey: 'id_topico', as: 'Flashcard' });
        }
    }

    Topico.init({
        id_topico: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        nome: {
            type: DataTypes.STRING,
            allowNull: false
        },
    }, {
        sequelize,
        modelName: 'Topico',
        tableName: 'Topico',
    });

    return Topico;
}
