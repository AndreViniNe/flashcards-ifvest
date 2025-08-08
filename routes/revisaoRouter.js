// Arquivo: routes/revisaoRouter.js

const express = require('express');
const router = express.Router();
// Supondo que as 'Áreas' de revisão correspondem às 'Matérias' dos flashcards.
// Se você tiver um model 'Area' separado, substitua 'Area' por 'Area'.
const { Area, Topico } = require('../models');

/**
 * @route   GET /revisao
 * @desc    Exibe a página para o usuário selecionar uma área de revisão.
 * @access  Public
 */
router.get('/', async (req, res) => {
    try {
        // Busca todas as matérias para listar como áreas de revisão.
        const areas = await Area.findAll({
            order: [['nome', 'ASC']]
        });
        // Renderiza a view 'buscarArea.ejs' dentro do diretório 'moduloRevisao'
        res.render('moduloRevisao/buscarArea', { areas });
    } catch (error) {
        console.error("Erro ao buscar áreas para revisão:", error);
        res.status(500).render('moduloRevisao/error', { message: 'Não foi possível carregar as áreas de estudo.' });
    }
});

/**
 * @route   GET /revisao/topicos/:areaId
 * @desc    Exibe os tópicos de uma área de revisão específica.
 * @access  Public
 */
router.get('/topicos/:areaId', async (req, res) => {
    try {
        const { areaId } = req.params;

        const area = await Area.findByPk(areaId);

        if (!area) {
            return res.status(404).render('moduloRevisao/error', { message: 'Área de estudo não encontrada.' });
        }

        // Busca os subtópicos relacionados à matéria (área) selecionada.
        const topicos = await Topico.findAll({
            where: { id_area: areaId },
            order: [['nome', 'ASC']]
        });

        // Renderiza a view 'buscarTopico.ejs'
        res.render('moduloRevisao/buscarTopico', { area, topicos });
    } catch (error) {
        console.error("Erro ao buscar tópicos para revisão:", error);
        res.status(500).render('moduloRevisao/error', { message: 'Não foi possível carregar os tópicos de estudo.' });
    }
});


module.exports = router;
