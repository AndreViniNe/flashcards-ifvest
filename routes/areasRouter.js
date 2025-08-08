const express = require('express');
const router = express.Router();
const { Area } = require('../models');

/**
 * @route   GET /materias
 * @desc    Busca todas as matérias.
 * @access  Public
 */
router.get('/', async (req, res) => {
    try {
        const materias = await Area.findAll();
        res.status(200).json(materias);
    } catch (error) {
        console.error('Erro ao buscar área:', error);
        res.status(500).json({ message: 'Erro interno ao buscar áreas', error: error.message });
    }
});

/**
 * @route   POST /materias
 * @desc    Cria uma nova área.
 * @access  Public
 */
router.post('/', async (req, res) => {
    try {
        const { nome } = req.body;
        if (!nome) {
            return res.status(400).json({ message: 'O nome da área é obrigatório.' });
        }
        const novaMateria = await Area.create({ nome });
        res.status(201).json(novaMateria);
    } catch (error) {
        console.error('Erro ao criar área:', error);
        res.status(400).json({ message: 'Erro ao criar área', error: error.message });
    }
});

module.exports = router;
