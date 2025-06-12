const db = require('../models');
const Subtopico = db.Subtopico;

module.exports = {
  async listarPorMateria(req, res) {
    try {
      const { materiaId } = req.params;
      const subtopicos = await Subtopico.findAll({ where: { materia_id: materiaId } });
      res.json(subtopicos);
    } catch (error) {
      console.error(error);
      res.status(500).json({ erro: 'Erro ao buscar subtópicos' });
    }
  }
};