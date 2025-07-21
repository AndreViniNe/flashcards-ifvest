// Arquivo: routes/index.js
const express = require('express');
const router = express.Router();

// Importando os novos roteadores de flashcards
const materiasRouter = require('./materiasRouter');
const subtopicosRouter = require('./subtopicosRouter');
const dificuldadesRouter = require('./dificuldadesRouter');
const flashcardsRouter = require('./flashcardsRouter');

// router.use('/', inicio);
// router.use('/revisao', revisao);

// Usando os novos roteadores de flashcards
router.use('/materias', materiasRouter);
router.use('/subtopicos', subtopicosRouter);
router.use('/dificuldades', dificuldadesRouter);
router.use('/flashcards', flashcardsRouter);


// Rota principal para a home dos flashcards, se necessário
router.get('/', (req, res) => {
    res.render('inicio_logado');
});


module.exports = router;