const express = require('express');
const router = express.Router();
const { Dificuldade } = require('../models');

/**
 * @route   GET /dificuldades
 * @desc    Busca todos os níveis de dificuldade.
 * @access  Public
 */
router.get('/', async (req, res) => {
    try {
        const dificuldades = await Dificuldade.findAll();
        res.status(200).json(dificuldades);
    } catch (error) {
        console.error('Erro ao buscar dificuldades:', error);
        res.status(500).json({ message: 'Erro interno ao buscar dificuldades', error: error.message });
    }
});

/**
 * @route   POST /dificuldades
 * @desc    Cria um novo nível de dificuldade.
 * @access  Public
 */
router.post('/', async (req, res) => {
    try {
        const { nivel } = req.body;
        if (!nivel) {
            return res.status(400).json({ message: 'O nível da dificuldade é obrigatório.' });
        }
        const novaDificuldade = await Dificuldade.create({ nivel });
        res.status(201).json(novaDificuldade);
    } catch (error) {
        console.error('Erro ao criar dificuldade:', error);
        res.status(400).json({ message: 'Erro ao criar dificuldade', error: error.message });
    }
});

module.exports = router;
