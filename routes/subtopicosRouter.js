const express = require('express');
const router = express.Router();
const { Subtopico } = require('../models');

/**
 * @route   GET /subtopicos
 * @desc    Busca todos os subtópicos.
 * @access  Public
 */
router.get('/', async (req, res) => {
    try {
        const subtopicos = await Subtopico.findAll();
        res.status(200).json(subtopicos);
    } catch (error) {
        console.error('Erro ao buscar subtópicos:', error);
        res.status(500).json({ message: 'Erro interno ao buscar subtópicos', error: error.message });
    }
});

/**
 * @route   POST /subtopicos
 * @desc    Cria um novo subtópico.
 * @access  Public
 */
router.post('/', async (req, res) => {
    try {
        const { nome, materia_id } = req.body;
        if (!nome || !materia_id) {
            return res.status(400).json({ message: 'Nome e materia_id são obrigatórios.' });
        }
        const novoSubtopico = await Subtopico.create({ nome, materia_id });
        res.status(201).json(novoSubtopico);
    } catch (error) {
        console.error('Erro ao criar subtópico:', error);
        res.status(400).json({ message: 'Erro ao criar subtópico', error: error.message });
    }
});

module.exports = router;
