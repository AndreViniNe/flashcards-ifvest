// controllers/flashcardController.js
const db = require('../models');
const Flashcard = db.Flashcard;
// Importe os modelos que você quer incluir
const Materia = db.Materia;
const Subtopico = db.Subtopico;

module.exports = {
  async listarFiltrados(req, res) {
    try {
      const { materiaId, subtopicoId, dificuldadeId } = req.query;
      const where = {};
      if (materiaId) where.materia_id = materiaId;
      if (subtopicoId) where.subtopico_id = subtopicoId;
      if (dificuldadeId) where.dificuldade_id = dificuldadeId;

      // A mudança principal está aqui: `include` para buscar os nomes
      const flashcards = await Flashcard.findAll({
        where,
        include: [
          { model: Materia, attributes: ['nome'] },
          { model: Subtopico, attributes: ['nome'] }
        ]
      });
      
      res.render('flashcards', { flashcards });
    } catch (error) {
      console.error(error);
      res.status(500).send('Erro ao buscar flashcards');
    }
  }
};
