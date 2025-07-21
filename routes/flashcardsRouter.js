const express = require('express');
const router = express.Router();
const { Flashcard, Materia, Subtopico, Dificuldade } = require('../models');

// Rota para a página de seleção de flashcards
router.get('/selecionar-flashcards', async (req, res) => {
    try {
        const materias = await Materia.findAll();
        const subtopicos = await Subtopico.findAll();
        const dificuldades = await Dificuldade.findAll();
        res.render('selecionar', { materias, subtopicos, dificuldades });
    } catch (error) {
        res.status(500).send('Erro ao carregar a página de seleção de flashcards.');
    }
});


// Rota para buscar flashcards com base nos filtros
router.post('/revisar', async (req, res) => {
    try {
        const { materia_id, subtopico_id, dificuldade_id } = req.body;
        const where = {};
        if (materia_id) where.materia_id = materia_id;
        if (subtopico_id) where.subtopico_id = subtopico_id;
        if (dificuldade_id) where.dificuldade_id = dificuldade_id;

        const flashcards = await Flashcard.findAll({ where });
        res.render('flashcards', { flashcards });
    } catch (error) {
        res.status(500).send('Erro ao buscar flashcards.');
    }
});

// Rota para buscar todos os flashcards (API)
router.get('/', async (req, res) => {
    try {
        const flashcards = await Flashcard.findAll({
            include: [Materia, Subtopico, Dificuldade]
        });
        res.status(200).json(flashcards);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar flashcards', error: error.message });
    }
});

// Rota para criar um novo flashcard (API)
router.post('/', async (req, res) => {
    try {
        const { pergunta, resposta, materia_id, subtopico_id, dificuldade_id } = req.body;
        const novoFlashcard = await Flashcard.create({
            pergunta,
            resposta,
            materia_id,
            subtopico_id,
            dificuldade_id
        });
        res.status(201).json(novoFlashcard);
    } catch (error) {
        res.status(400).json({ message: 'Erro ao criar flashcard', error: error.message });
    }
});

// Rota para atualizar um flashcard (API)
router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { pergunta, resposta, materia_id, subtopico_id, dificuldade_id } = req.body;
        const [updated] = await Flashcard.update({
            pergunta,
            resposta,
            materia_id,
            subtopico_id,
            dificuldade_id
        }, {
            where: { id: id }
        });

        if (updated) {
            const updatedFlashcard = await Flashcard.findByPk(id);
            res.status(200).json(updatedFlashcard);
        } else {
            res.status(404).json({ message: 'Flashcard não encontrado' });
        }
    } catch (error) {
        res.status(400).json({ message: 'Erro ao atualizar flashcard', error: error.message });
    }
});

// Rota para deletar um flashcard (API)
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Flashcard.destroy({
            where: { id: id }
        });

        if (deleted) {
            res.status(204).send();
        } else {
            res.status(404).json({ message: 'Flashcard não encontrado' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Erro ao deletar flashcard', error: error.message });
    }
});


module.exports = router;
