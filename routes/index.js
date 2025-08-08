// Arquivo: routes/index.js
const express = require('express');
const router = express.Router();

// Importando os novos roteadores de flashcards
const areasRouter = require('./areasRouter');
const topicosRouter = require('./topicosRouter');
const dificuldadesRouter = require('./dificuldadesRouter');
const flashcardsRouter = require('./flashcardsRouter');
const revisaoRouter = require('./revisaoRouter');

// router.use('/', inicio);
// router.use('/revisao', revisao);

// Usando os novos roteadores de flashcards
router.use('/areas', areasRouter);
router.use('/topicos', topicosRouter);
router.use('/dificuldades', dificuldadesRouter);
router.use('/flashcards', flashcardsRouter);
router.use('/revisao', revisaoRouter);


// Rota principal para a home dos flashcards, se necessário
router.get('/', (req, res) => {
    res.render('inicio_logado');
});


module.exports = router;