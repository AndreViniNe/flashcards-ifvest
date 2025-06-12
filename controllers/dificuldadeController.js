const db = require('../models');
const Dificuldade = db.Dificuldade;

module.exports = {
  async listarDificuldades(req, res) {
    try {
      const dificuldades = await Dificuldade.findAll();
      res.json(dificuldades);
    } catch (error) {
      console.error(error);
      res.status(500).json({ erro: 'Erro ao buscar dificuldades' });
    }
  }
};