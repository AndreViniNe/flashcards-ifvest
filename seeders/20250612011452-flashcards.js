'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('flashcards', [
      {
        pergunta: "O que é uma equação do 1º grau?",
        resposta: "É uma equação que pode ser escrita na forma ax + b = 0, onde a ≠ 0.",
        materia_id: 1,
        subtopico_id: 1,
        dificuldade_id: 1,
        createdAt: "2024-01-01T00:00:00.000Z",
        updatedAt: "2024-01-01T00:00:00.000Z"
      },
      {
        pergunta: "Como resolver um sistema de equações lineares?",
        resposta: "Utilizando substituição, adição ou escalonamento.",
        materia_id: 1,
        subtopico_id: 1,
        dificuldade_id: 2,
        createdAt: "2024-01-01T00:00:00.000Z",
        updatedAt: "2024-01-01T00:00:00.000Z"
      },
      {
        pergunta: "Explique o conceito de inequações com módulo.",
        resposta: "Consiste em resolver expressões com valor absoluto, criando casos.",
        materia_id: 1,
        subtopico_id: 1,
        dificuldade_id: 3,
        createdAt: "2024-01-01T00:00:00.000Z",
        updatedAt: "2024-01-01T00:00:00.000Z"
      },
      {
        pergunta: "Qual a estrutura básica de uma redação dissertativo-argumentativa?",
        resposta: "Introdução, desenvolvimento e conclusão.",
        materia_id: 2,
        subtopico_id: 10,
        dificuldade_id: 1,
        createdAt: "2024-01-01T00:00:00.000Z",
        updatedAt: "2024-01-01T00:00:00.000Z"
      },
      {
        pergunta: "Por que a tese é importante na redação?",
        resposta: "Ela apresenta o ponto de vista do autor e orienta os argumentos.",
        materia_id: 2,
        subtopico_id: 10,
        dificuldade_id: 2,
        createdAt: "2024-01-01T00:00:00.000Z",
        updatedAt: "2024-01-01T00:00:00.000Z"
      },
      {
        pergunta: "Como usar repertório sociocultural na redação?",
        resposta: "Usando fatos históricos, dados ou citações para fortalecer o argumento.",
        materia_id: 2,
        subtopico_id: 10,
        dificuldade_id: 3,
        createdAt: "2024-01-01T00:00:00.000Z",
        updatedAt: "2024-01-01T00:00:00.000Z"
      },
      {
        pergunta: "O que é velocidade média?",
        resposta: "É a razão entre a variação da posição e o tempo gasto.",
        materia_id: 3,
        subtopico_id: 11,
        dificuldade_id: 1,
        createdAt: "2024-01-01T00:00:00.000Z",
        updatedAt: "2024-01-01T00:00:00.000Z"
      },
      {
        pergunta: "Qual a equação do movimento uniformemente variado (MUV)?",
        resposta: "S = S0 + V0t + ½at².",
        materia_id: 3,
        subtopico_id: 11,
        dificuldade_id: 2,
        createdAt: "2024-01-01T00:00:00.000Z",
        updatedAt: "2024-01-01T00:00:00.000Z"
      },
      {
        pergunta: "Explique a diferença entre velocidade escalar média e instantânea.",
        resposta: "Média é geral no tempo; instantânea é num instante.",
        materia_id: 3,
        subtopico_id: 11,
        dificuldade_id: 3,
        createdAt: "2024-01-01T00:00:00.000Z",
        updatedAt: "2024-01-01T00:00:00.000Z"
      },
      {
        pergunta: "O que é uma pilha eletroquímica?",
        resposta: "É um dispositivo que transforma energia química em elétrica.",
        materia_id: 4,
        subtopico_id: 20,
        dificuldade_id: 1,
        createdAt: "2024-01-01T00:00:00.000Z",
        updatedAt: "2024-01-01T00:00:00.000Z"
      },
      {
        pergunta: "Como identificar o ânodo e o cátodo em uma pilha?",
        resposta: "O ânodo sofre oxidação e o cátodo, redução.",
        materia_id: 4,
        subtopico_id: 20,
        dificuldade_id: 2,
        createdAt: "2024-01-01T00:00:00.000Z",
        updatedAt: "2024-01-01T00:00:00.000Z"
      },
      {
        pergunta: "O que é potencial padrão de eletrodo?",
        resposta: "É a medida da tendência de uma substância sofrer redução.",
        materia_id: 4,
        subtopico_id: 20,
        dificuldade_id: 3,
        createdAt: "2024-01-01T00:00:00.000Z",
        updatedAt: "2024-01-01T00:00:00.000Z"
      },
      {
        pergunta: "O que é um gene?",
        resposta: "É uma sequência de DNA que codifica uma proteína.",
        materia_id: 5,
        subtopico_id: 22,
        dificuldade_id: 1,
        createdAt: "2024-01-01T00:00:00.000Z",
        updatedAt: "2024-01-01T00:00:00.000Z"
      },
      {
        pergunta: "Explique o que é dominância incompleta.",
        resposta: "É quando o heterozigoto expressa um fenótipo intermediário.",
        materia_id: 5,
        subtopico_id: 22,
        dificuldade_id: 2,
        createdAt: "2024-01-01T00:00:00.000Z",
        updatedAt: "2024-01-01T00:00:00.000Z"
      },
      {
        pergunta: "Como funciona a herança ligada ao sexo?",
        resposta: "Acontece quando genes estão localizados nos cromossomos sexuais.",
        materia_id: 5,
        subtopico_id: 22,
        dificuldade_id: 3,
        createdAt: "2024-01-01T00:00:00.000Z",
        updatedAt: "2024-01-01T00:00:00.000Z"
      },
      {
        pergunta: "O que é cadeia alimentar?",
        resposta: "É uma sequência linear de transferência de energia entre organismos.",
        materia_id: 5,
        subtopico_id: 23,
        dificuldade_id: 1,
        createdAt: "2024-01-01T00:00:00.000Z",
        updatedAt: "2024-01-01T00:00:00.000Z"
      },
      {
        pergunta: "O que caracteriza um produtor?",
        resposta: "Organismos capazes de produzir seu próprio alimento, como plantas.",
        materia_id: 5,
        subtopico_id: 23,
        dificuldade_id: 2,
        createdAt: "2024-01-01T00:00:00.000Z",
        updatedAt: "2024-01-01T00:00:00.000Z"
      },
      {
        pergunta: "Explique a diferença entre ecossistema e bioma.",
        resposta: "Ecossistema é local + seres vivos; bioma é o conjunto de ecossistemas.",
        materia_id: 5,
        subtopico_id: 23,
        dificuldade_id: 3,
        createdAt: "2024-01-01T00:00:00.000Z",
        updatedAt: "2024-01-01T00:00:00.000Z"
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Flashcards', null, {});
  }
};
