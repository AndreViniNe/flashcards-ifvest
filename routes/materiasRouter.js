const express = require('express');
const router = express.Router();
const { Materia } = require('../models');

/**
 * @route   GET /materias
 * @desc    Busca todas as matérias.
 * @access  Public
 */
router.get('/', async (req, res) => {
    try {
        const materias = await Materia.findAll();
        res.status(200).json(materias);
    } catch (error) {
        console.error('Erro ao buscar matérias:', error);
        res.status(500).json({ message: 'Erro interno ao buscar matérias', error: error.message });
    }
});

/**
 * @route   POST /materias
 * @desc    Cria uma nova matéria.
 * @access  Public
 */
router.post('/', async (req, res) => {
    try {
        const { nome } = req.body;
        if (!nome) {
            return res.status(400).json({ message: 'O nome da matéria é obrigatório.' });
        }
        const novaMateria = await Materia.create({ nome });
        res.status(201).json(novaMateria);
    } catch (error) {
        console.error('Erro ao criar matéria:', error);
        res.status(400).json({ message: 'Erro ao criar matéria', error: error.message });
    }
});

module.exports = router;
