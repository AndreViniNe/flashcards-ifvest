const db = require('../models');
const Flashcard = db.Flashcard;

module.exports = {
  async listarFiltrados(req, res) {
    try {
      const { materiaId, subtopicoId, dificuldadeId } = req.query;
      const where = {};
      if (materiaId) where.materia_id = materiaId;
      if (subtopicoId) where.subtopico_id = subtopicoId;
      if (dificuldadeId) where.dificuldade_id = dificuldadeId;

      const flashcards = await Flashcard.findAll({ where });
      res.render('flashcards', { flashcards });
    } catch (error) {
      console.error(error);
      res.status(500).send('Erro ao buscar flashcards');
    }
  }
};