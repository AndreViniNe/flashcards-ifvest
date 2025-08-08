const express = require('express');
const router = express.Router();
const { Flashcard, Area, Topico, Dificuldade } = require('../models');

// Rota para a página de seleção de flashcards
router.get('/selecionar', async (req, res) => {
    try {
        const areas = await Area.findAll();
        const topicos = await Topico.findAll();
        const dificuldades = await Dificuldade.findAll();
        res.render('selecionar', { areas, topicos, dificuldades });
    } catch (error) {
        res.status(500).send('Erro ao carregar a página de seleção de flashcards.');
    }
});



// Rota para buscar e exibir flashcards com base nos filtros (GET /flashcards)
router.get('/', async (req, res) => {
    try {
        const { id_area, id_topico, id_dificuldade } = req.query;
        const where = {};
        if (id_area) where.id_area = id_area;
        if (id_topico) where.id_topico = id_topico;
        if (id_dificuldade) where.id_dificuldade = id_dificuldade;

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
            include: [Area, Topico, Dificuldade]
        });
        res.status(200).json(flashcards);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar flashcards', error: error.message });
    }
});

// Rota para criar um novo flashcard (API)
router.post('/', async (req, res) => {
    try {
        const { pergunta, resposta, id_area, id_topico, id_dificuldade } = req.body;
        const novoFlashcard = await Flashcard.create({
            pergunta,
            resposta,
            id_area,
            id_topico,
            id_dificuldade
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
        const { pergunta, resposta, id_area, id_topico, id_dificuldade } = req.body;
        const [updated] = await Flashcard.update({
            pergunta,
            resposta,
            id_area,
            id_topico,
            id_dificuldade
        }, {
            where: { id_flashcards: id }
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
            where: { id_flashcards: id }
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
