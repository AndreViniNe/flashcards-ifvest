const db = require('../models');
const Materia = db.Materia;

module.exports = {
  async listarMaterias(req, res) {
    try {
      const materias = await Materia.findAll();
      res.json(materias);
    } catch (error) {
      console.error(error);
      res.status(500).json({ erro: 'Erro ao buscar matérias' });
    }
  }
};