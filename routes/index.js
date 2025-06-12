const express = require('express');
const router = express.Router();

const materiaController = require('../controllers/materiaController');
const subtopicoController = require('../controllers/subtopicoController');
const dificuldadeController = require('../controllers/dificuldadeController');
const flashcardController = require('../controllers/flashcardController');

router.get('/', (req, res) => {
  res.render('selecionar');
});

// Rota para listar todas as matérias
router.get('/materias', materiaController.listarMaterias);

// Rota para listar subtópicos por matéria
router.get('/subtopicos/:materiaId', subtopicoController.listarPorMateria);

// Rota para listar todas as dificuldades
router.get('/dificuldades', dificuldadeController.listarDificuldades);

// Rota para listar flashcards filtrados
router.get('/flashcards', flashcardController.listarFiltrados);

module.exports = router;
