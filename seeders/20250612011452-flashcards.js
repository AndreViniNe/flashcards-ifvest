'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('flashcards', [
      // =================================================================
      // FLASHCARDS EXISTENTES
      // =================================================================
      {
        pergunta: "O que é uma equação do 1º grau?",
        resposta: "É uma equação que pode ser escrita na forma ax + b = 0, onde a ≠ 0.",
        materia_id: 1,
        subtopico_id: 1, // Álgebra
        dificuldade_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        pergunta: "Como resolver um sistema de equações lineares?",
        resposta: "Utilizando substituição, adição ou escalonamento.",
        materia_id: 1,
        subtopico_id: 1, // Álgebra
        dificuldade_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        pergunta: "Explique o conceito de inequações com módulo.",
        resposta: "Consiste em resolver expressões com valor absoluto, criando casos.",
        materia_id: 1,
        subtopico_id: 1, // Álgebra
        dificuldade_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        pergunta: "Qual a estrutura básica de uma redação dissertativo-argumentativa?",
        resposta: "Introdução, desenvolvimento e conclusão.",
        materia_id: 2,
        subtopico_id: 10, // Redação
        dificuldade_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        pergunta: "Por que a tese é importante na redação?",
        resposta: "Ela apresenta o ponto de vista do autor e orienta os argumentos.",
        materia_id: 2,
        subtopico_id: 10, // Redação
        dificuldade_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        pergunta: "Como usar repertório sociocultural na redação?",
        resposta: "Usando fatos históricos, dados ou citações para fortalecer o argumento.",
        materia_id: 2,
        subtopico_id: 10, // Redação
        dificuldade_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        pergunta: "O que é velocidade média?",
        resposta: "É a razão entre a variação da posição e o tempo gasto.",
        materia_id: 3,
        subtopico_id: 11, // Cinemática
        dificuldade_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        pergunta: "Qual a equação do movimento uniformemente variado (MUV)?",
        resposta: "S = S0 + V0t + ½at².",
        materia_id: 3,
        subtopico_id: 11, // Cinemática
        dificuldade_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        pergunta: "Explique a diferença entre velocidade escalar média e instantânea.",
        resposta: "Média é geral no tempo; instantânea é num instante.",
        materia_id: 3,
        subtopico_id: 11, // Cinemática
        dificuldade_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        pergunta: "O que é uma pilha eletroquímica?",
        resposta: "É um dispositivo que transforma energia química em elétrica.",
        materia_id: 4,
        subtopico_id: 20, // Eletroquímica
        dificuldade_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        pergunta: "Como identificar o ânodo e o cátodo em uma pilha?",
        resposta: "O ânodo sofre oxidação e o cátodo, redução.",
        materia_id: 4,
        subtopico_id: 20, // Eletroquímica
        dificuldade_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        pergunta: "O que é potencial padrão de eletrodo?",
        resposta: "É a medida da tendência de uma substância sofrer redução.",
        materia_id: 4,
        subtopico_id: 20, // Eletroquímica
        dificuldade_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        pergunta: "O que é um gene?",
        resposta: "É uma sequência de DNA que codifica uma proteína.",
        materia_id: 5,
        subtopico_id: 22, // Genética
        dificuldade_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        pergunta: "Explique o que é dominância incompleta.",
        resposta: "É quando o heterozigoto expressa um fenótipo intermediário.",
        materia_id: 5,
        subtopico_id: 22, // Genética
        dificuldade_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        pergunta: "Como funciona a herança ligada ao sexo?",
        resposta: "Acontece quando genes estão localizados nos cromossomos sexuais.",
        materia_id: 5,
        subtopico_id: 22, // Genética
        dificuldade_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        pergunta: "O que é cadeia alimentar?",
        resposta: "É uma sequência linear de transferência de energia entre organismos.",
        materia_id: 5,
        subtopico_id: 23, // Ecologia
        dificuldade_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        pergunta: "O que caracteriza um produtor?",
        resposta: "Organismos capazes de produzir seu próprio alimento, como plantas.",
        materia_id: 5,
        subtopico_id: 23, // Ecologia
        dificuldade_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        pergunta: "Explique a diferença entre ecossistema e bioma.",
        resposta: "Ecossistema é local + seres vivos; bioma é o conjunto de ecossistemas.",
        materia_id: 5,
        subtopico_id: 23, // Ecologia
        dificuldade_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // =================================================================
      // NOVOS FLASHCARDS
      // =================================================================

      // --- Matemática (materia_id: 1) ---
      // Geometria (subtopico_id: 2)
      {
        pergunta: "Qual a fórmula da área de um triângulo?",
        resposta: "A fórmula é (base × altura) / 2.",
        materia_id: 1,
        subtopico_id: 2,
        dificuldade_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        pergunta: "Qual a Relação de Euler para poliedros convexos?",
        resposta: "V - A + F = 2, onde V é o número de vértices, A é o número de arestas e F é o número de faces.",
        materia_id: 1,
        subtopico_id: 2,
        dificuldade_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        pergunta: "O que é a Geometria Não-Euclidiana?",
        resposta: "É um tipo de geometria onde o quinto postulado de Euclides (postulado das paralelas) não é válido, levando a geometrias como a hiperbólica e a elíptica.",
        materia_id: 1,
        subtopico_id: 2,
        dificuldade_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Trigonometria (subtopico_id: 3)
      {
        pergunta: "Quais são as três principais razões trigonométricas no triângulo retângulo?",
        resposta: "Seno (cateto oposto / hipotenusa), Cosseno (cateto adjacente / hipotenusa) e Tangente (cateto oposto / cateto adjacente).",
        materia_id: 1,
        subtopico_id: 3,
        dificuldade_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        pergunta: "Qual é a Lei dos Cossenos?",
        resposta: "Em um triângulo qualquer, a² = b² + c² - 2bc⋅cos(Â), onde 'a' é o lado oposto ao ângulo Â.",
        materia_id: 1,
        subtopico_id: 3,
        dificuldade_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        pergunta: "O que é o ciclo trigonométrico e qual seu raio?",
        resposta: "É uma circunferência de raio 1, centrada na origem de um plano cartesiano, usada para estender as definições das funções trigonométricas para todos os números reais.",
        materia_id: 1,
        subtopico_id: 3,
        dificuldade_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Estatística (subtopico_id: 4)
      {
        pergunta: "Qual a diferença entre média, moda e mediana?",
        resposta: "Média é a soma dos valores dividida pelo número de valores. Moda é o valor que mais aparece. Mediana é o valor central de um conjunto de dados ordenado.",
        materia_id: 1,
        subtopico_id: 4,
        dificuldade_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        pergunta: "O que é desvio padrão?",
        resposta: "É uma medida que indica o grau de dispersão de um conjunto de dados em relação à sua média. Um baixo desvio padrão indica que os pontos de dados tendem a estar próximos da média.",
        materia_id: 1,
        subtopico_id: 4,
        dificuldade_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        pergunta: "Explique a diferença entre população e amostra em estatística.",
        resposta: "População é o conjunto completo de todos os itens de interesse em um estudo. Amostra é um subconjunto da população, selecionado para representá-la.",
        materia_id: 1,
        subtopico_id: 4,
        dificuldade_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Funções (subtopico_id: 5)
      {
        pergunta: "O que é o domínio de uma função?",
        resposta: "É o conjunto de todos os valores de entrada (x) para os quais a função está definida.",
        materia_id: 1,
        subtopico_id: 5,
        dificuldade_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        pergunta: "Como encontrar os zeros ou raízes de uma função quadrática f(x) = ax² + bx + c?",
        resposta: "Utilizando a fórmula de Bhaskara: x = [-b ± sqrt(b² - 4ac)] / 2a.",
        materia_id: 1,
        subtopico_id: 5,
        dificuldade_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        pergunta: "O que é uma função composta e como é representada?",
        resposta: "É uma função criada pela aplicação de uma função à saída de outra. Se temos f(x) e g(x), a composta é representada por (g ∘ f)(x) = g(f(x)).",
        materia_id: 1,
        subtopico_id: 5,
        dificuldade_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // --- Português (materia_id: 2) ---
      // Interpretação de Texto (subtopico_id: 6)
      {
        pergunta: "O que é fazer uma inferência em um texto?",
        resposta: "É chegar a uma conclusão baseada em evidências e raciocínio, em vez de informações explicitamente declaradas.",
        materia_id: 2,
        subtopico_id: 6,
        dificuldade_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        pergunta: "Qual a diferença entre denotação e conotação?",
        resposta: "Denotação é o significado literal, dicionarizado de uma palavra. Conotação é o conjunto de sentimentos, ideias ou associações que uma palavra evoca, seu sentido figurado.",
        materia_id: 2,
        subtopico_id: 6,
        dificuldade_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        pergunta: "O que são as figuras de linguagem e qual sua função?",
        resposta: "São recursos expressivos que desviam da norma linguística para dar mais ênfase, expressividade ou originalidade à comunicação. Exemplos: metáfora, metonímia, ironia.",
        materia_id: 2,
        subtopico_id: 6,
        dificuldade_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Gramática (subtopico_id: 7)
      {
        pergunta: "O que são sujeito e predicado?",
        resposta: "Sujeito é o termo sobre o qual se declara algo. Predicado é tudo o que se declara sobre o sujeito.",
        materia_id: 2,
        subtopico_id: 7,
        dificuldade_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        pergunta: "Qual a diferença entre adjunto adnominal e complemento nominal?",
        resposta: "Adjunto adnominal modifica um substantivo (concreto ou abstrato) e tem valor ativo. Complemento nominal completa o sentido de um substantivo abstrato, adjetivo ou advérbio, e tem valor passivo.",
        materia_id: 2,
        subtopico_id: 7,
        dificuldade_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        pergunta: "Explique a função sintática do aposto e do vocativo.",
        resposta: "Aposto é um termo que explica, desenvolve ou resume outro termo (ex: 'João, meu irmão, chegou'). Vocativo é um termo independente usado para chamar ou interpelar o interlocutor (ex: 'João, venha aqui!').",
        materia_id: 2,
        subtopico_id: 7,
        dificuldade_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Literatura (subtopico_id: 8)
      {
        pergunta: "Qual o marco inicial do Modernismo no Brasil?",
        resposta: "A Semana de Arte Moderna de 1922, realizada em São Paulo.",
        materia_id: 2,
        subtopico_id: 8,
        dificuldade_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        pergunta: "Cite três características do Romantismo na literatura brasileira.",
        resposta: "Subjetivismo (foco no eu), Nacionalismo (exaltação da pátria) e Idealização (da mulher, do amor e do herói).",
        materia_id: 2,
        subtopico_id: 8,
        dificuldade_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        pergunta: "Diferencie o Cultismo do Conceptismo, estilos do período Barroco.",
        resposta: "Cultismo é o jogo de palavras, o rebuscamento da forma com uso de figuras de linguagem complexas. Conceptismo é o jogo de ideias, o rebuscamento do raciocínio e da lógica.",
        materia_id: 2,
        subtopico_id: 8,
        dificuldade_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Ortografia (subtopico_id: 9)
      {
        pergunta: "Quando se usa 'mas' e 'mais'?",
        resposta: "'Mas' é uma conjunção adversativa, sinônimo de 'porém'. 'Mais' é um advérbio de intensidade, oposto de 'menos'.",
        materia_id: 2,
        subtopico_id: 9,
        dificuldade_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        pergunta: "Explique a regra de uso dos 'porquês'.",
        resposta: "'Por que' (separado, sem acento) para perguntas. 'Porque' (junto, sem acento) para respostas. 'Por quê' (separado, com acento) no final de frases. 'Porquê' (junto, com acento) como substantivo (o motivo).",
        materia_id: 2,
        subtopico_id: 9,
        dificuldade_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        pergunta: "Qual a regra de acentuação para as palavras paroxítonas terminadas em ditongo crescente?",
        resposta: "Todas as paroxítonas terminadas em ditongo (crescente ou decrescente) são acentuadas. Exemplos: história, série, mágoa.",
        materia_id: 2,
        subtopico_id: 9,
        dificuldade_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // --- Física (materia_id: 3) ---
      // Dinâmica (subtopico_id: 12)
      {
        pergunta: "O que diz a Primeira Lei de Newton (Lei da Inércia)?",
        resposta: "Um corpo em repouso tende a permanecer em repouso, e um corpo em movimento tende a permanecer em movimento com velocidade constante, a menos que uma força externa atue sobre ele.",
        materia_id: 3,
        subtopico_id: 12,
        dificuldade_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        pergunta: "Qual é a Segunda Lei de Newton?",
        resposta: "A força resultante sobre um corpo é igual ao produto de sua massa pela sua aceleração (F = m.a).",
        materia_id: 3,
        subtopico_id: 12,
        dificuldade_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        pergunta: "Explique a Terceira Lei de Newton (Ação e Reação).",
        resposta: "Para toda ação, há uma reação de mesma intensidade, mesma direção e sentido oposto. As forças de ação e reação atuam em corpos diferentes.",
        materia_id: 3,
        subtopico_id: 12,
        dificuldade_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Termologia (subtopico_id: 13)
      {
        pergunta: "Qual a diferença entre calor e temperatura?",
        resposta: "Temperatura é a medida da agitação média das partículas de um corpo. Calor é a energia térmica transferida de um corpo para outro devido à diferença de temperatura.",
        materia_id: 3,
        subtopico_id: 13,
        dificuldade_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        pergunta: "Quais são os três processos de propagação de calor?",
        resposta: "Condução (meios sólidos), convecção (fluidos - líquidos e gases) e irradiação (ondas eletromagnéticas, não precisa de meio).",
        materia_id: 3,
        subtopico_id: 13,
        dificuldade_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        pergunta: "O que diz a Primeira Lei da Termodinâmica?",
        resposta: "A variação da energia interna (ΔU) de um sistema é igual à diferença entre o calor (Q) trocado com o ambiente e o trabalho (W) realizado pelo sistema (ΔU = Q - W). É uma afirmação do princípio da conservação de energia.",
        materia_id: 3,
        subtopico_id: 13,
        dificuldade_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Óptica (subtopico_id: 14)
      {
        pergunta: "O que são lentes convergentes e divergentes?",
        resposta: "Lentes convergentes concentram os raios de luz paralelos em um ponto (foco). Lentes divergentes espalham os raios de luz paralelos.",
        materia_id: 3,
        subtopico_id: 14,
        dificuldade_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        pergunta: "O que é a refração da luz?",
        resposta: "É o fenômeno em que a luz muda de velocidade e, consequentemente, de direção ao passar de um meio para outro com índice de refração diferente.",
        materia_id: 3,
        subtopico_id: 14,
        dificuldade_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        pergunta: "Explique a Lei de Snell-Descartes.",
        resposta: "Descreve a relação entre os ângulos de incidência e refração e os índices de refração dos meios: n1 * sen(θ1) = n2 * sen(θ2).",
        materia_id: 3,
        subtopico_id: 14,
        dificuldade_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Eletromagnetismo (subtopico_id: 15)
      {
        pergunta: "O que é um campo magnético?",
        resposta: "É uma região do espaço ao redor de um ímã ou de uma corrente elétrica onde forças magnéticas podem ser detectadas.",
        materia_id: 3,
        subtopico_id: 15,
        dificuldade_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        pergunta: "O que diz a Lei de Faraday da Indução Eletromagnética?",
        resposta: "A variação do fluxo magnético através de uma espira ou circuito fechado induz uma força eletromotriz (uma tensão) nesse circuito.",
        materia_id: 3,
        subtopico_id: 15,
        dificuldade_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        pergunta: "O que são as Equações de Maxwell?",
        resposta: "São um conjunto de quatro equações fundamentais que descrevem como os campos elétricos e magnéticos são gerados e se alteram, unificando eletricidade, magnetismo e óptica.",
        materia_id: 3,
        subtopico_id: 15,
        dificuldade_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // --- Química (materia_id: 4) ---
      // Estequiometria (subtopico_id: 16)
      {
        pergunta: "O que é o mol?",
        resposta: "É a unidade de medida da quantidade de matéria no Sistema Internacional, contendo aproximadamente 6,02 x 10²³ entidades elementares (Constante de Avogadro).",
        materia_id: 4,
        subtopico_id: 16,
        dificuldade_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        pergunta: "O que é um reagente limitante em uma reação química?",
        resposta: "É o reagente que é completamente consumido primeiro em uma reação, determinando a quantidade máxima de produto que pode ser formada.",
        materia_id: 4,
        subtopico_id: 16,
        dificuldade_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        pergunta: "Como calcular o rendimento percentual de uma reação?",
        resposta: "Pela fórmula: Rendimento (%) = (Rendimento Real / Rendimento Teórico) * 100. O rendimento real é a quantidade de produto obtida experimentalmente, e o teórico é a quantidade máxima calculada estequiometricamente.",
        materia_id: 4,
        subtopico_id: 16,
        dificuldade_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Físico-química (subtopico_id: 17)
      {
        pergunta: "Qual a diferença entre uma reação endotérmica e uma exotérmica?",
        resposta: "Reação exotérmica libera calor (ΔH < 0). Reação endotérmica absorve calor (ΔH > 0).",
        materia_id: 4,
        subtopico_id: 17,
        dificuldade_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        pergunta: "O que afeta a velocidade de uma reação química?",
        resposta: "Principalmente: concentração dos reagentes, temperatura, pressão (para gases), superfície de contato e presença de catalisadores.",
        materia_id: 4,
        subtopico_id: 17,
        dificuldade_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        pergunta: "O que é o Princípio de Le Châtelier?",
        resposta: "Quando um sistema em equilíbrio é perturbado (por mudança de concentração, temperatura ou pressão), ele se desloca no sentido de anular ou minimizar essa perturbação, atingindo um novo estado de equilíbrio.",
        materia_id: 4,
        subtopico_id: 17,
        dificuldade_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Química Orgânica (subtopico_id: 18)
      {
        pergunta: "O que são hidrocarbonetos?",
        resposta: "São compostos orgânicos formados exclusivamente por átomos de carbono e hidrogênio.",
        materia_id: 4,
        subtopico_id: 18,
        dificuldade_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        pergunta: "Quais são as principais funções orgânicas oxigenadas?",
        resposta: "Álcool (-OH), Fenol (-OH em anel aromático), Éter (-O-), Aldeído (-CHO), Cetona (-CO-), Ácido Carboxílico (-COOH) e Éster (-COO-).",
        materia_id: 4,
        subtopico_id: 18,
        dificuldade_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        pergunta: "O que é isomeria plana e quais são seus tipos?",
        resposta: "É o fenômeno em que dois ou mais compostos têm a mesma fórmula molecular, mas diferentes fórmulas estruturais planas. Tipos: de cadeia, de posição, de função (funcional), metameria e tautomeria.",
        materia_id: 4,
        subtopico_id: 18,
        dificuldade_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Química Inorgânica (subtopico_id: 19)
      {
        pergunta: "Quais são as quatro principais funções inorgânicas?",
        resposta: "Ácidos, bases, sais e óxidos.",
        materia_id: 4,
        subtopico_id: 19,
        dificuldade_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        pergunta: "Como se define um ácido e uma base segundo Arrhenius?",
        resposta: "Ácido é toda substância que, em solução aquosa, se ioniza produzindo como cátion apenas o H+. Base é toda substância que, em solução aquosa, se dissocia produzindo como ânion apenas o OH-.",
        materia_id: 4,
        subtopico_id: 19,
        dificuldade_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        pergunta: "O que é uma reação de neutralização?",
        resposta: "É uma reação que ocorre entre um ácido e uma base, formando sal e água como produtos. Ex: HCl + NaOH → NaCl + H₂O.",
        materia_id: 4,
        subtopico_id: 19,
        dificuldade_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // --- Biologia (materia_id: 5) ---
      // Citologia (subtopico_id: 21)
      {
        pergunta: "Qual a função da mitocôndria na célula?",
        resposta: "É a organela responsável pela respiração celular e pela produção da maior parte da energia (ATP) da célula.",
        materia_id: 5,
        subtopico_id: 21,
        dificuldade_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        pergunta: "Diferencie células procariontes de eucariontes.",
        resposta: "Células procariontes não possuem núcleo definido (material genético disperso no citoplasma) nem organelas membranosas. Células eucariontes possuem núcleo e organelas membranosas.",
        materia_id: 5,
        subtopico_id: 21,
        dificuldade_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        pergunta: "Descreva as fases da mitose.",
        resposta: "Prófase, Metáfase, Anáfase e Telófase (PMAT). Na metáfase, os cromossomos se alinham no centro da célula. Na anáfase, as cromátides-irmãs se separam.",
        materia_id: 5,
        subtopico_id: 21,
        dificuldade_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Fisiologia (subtopico_id: 24)
      {
        pergunta: "Qual o caminho do sangue no sistema circulatório humano (pequena e grande circulação)?",
        resposta: "Pequena: Coração -> Pulmão -> Coração. Grande: Coração -> Corpo -> Coração.",
        materia_id: 5,
        subtopico_id: 24,
        dificuldade_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        pergunta: "Quais são os principais hormônios produzidos pelo pâncreas e suas funções?",
        resposta: "Insulina (reduz o nível de glicose no sangue, promovendo sua absorção pelas células) e Glucagon (aumenta o nível de glicose no sangue, estimulando a quebra do glicogênio no fígado).",
        materia_id: 5,
        subtopico_id: 24,
        dificuldade_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        pergunta: "O que é um neurônio e como ocorre o impulso nervoso?",
        resposta: "Neurônio é a célula básica do sistema nervoso. O impulso nervoso é um sinal elétrico que percorre o neurônio devido à entrada e saída de íons (sódio e potássio) através da membrana, alterando seu potencial elétrico.",
        materia_id: 5,
        subtopico_id: 24,
        dificuldade_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Evolução (subtopico_id: 25)
      {
        pergunta: "O que é seleção natural?",
        resposta: "É o principal mecanismo da evolução, proposto por Charles Darwin, onde os indivíduos mais adaptados a um ambiente têm mais chances de sobreviver e se reproduzir, passando suas características aos descendentes.",
        materia_id: 5,
        subtopico_id: 25,
        dificuldade_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        pergunta: "Diferencie órgãos homólogos de órgãos análogos.",
        resposta: "Homólogos têm a mesma origem embrionária, mas podem ter funções diferentes (ex: braço humano e asa de morcego). Análogos têm origens diferentes, mas funções semelhantes (ex: asa de inseto e asa de ave).",
        materia_id: 5,
        subtopico_id: 25,
        dificuldade_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        pergunta: "O que é a Teoria Sintética da Evolução (Neodarwinismo)?",
        resposta: "É a união das ideias de Darwin sobre seleção natural com os conhecimentos da genética (mutações e recombinação gênica) como fontes da variabilidade sobre a qual a seleção atua.",
        materia_id: 5,
        subtopico_id: 25,
        dificuldade_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // --- História (materia_id: 6) ---
      // Brasil Colônia (subtopico_id: 26)
      {
        pergunta: "O que foi o Tratado de Tordesilhas?",
        resposta: "Um acordo assinado em 1494 entre Portugal e Espanha que dividia as terras recém-descobertas fora da Europa por um meridiano a 370 léguas a oeste das ilhas de Cabo Verde.",
        materia_id: 6,
        subtopico_id: 26,
        dificuldade_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        pergunta: "Qual era a base da economia no Brasil Colônia?",
        resposta: "Baseava-se no latifúndio (grandes propriedades de terra), na monocultura (principalmente cana-de-açúcar e depois mineração) e no trabalho escravo (indígena e, majoritariamente, africano).",
        materia_id: 6,
        subtopico_id: 26,
        dificuldade_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        pergunta: "O que foi a Inconfidência Mineira?",
        resposta: "Foi uma tentativa de revolta de caráter separatista ocorrida em Minas Gerais em 1789, influenciada pelas ideias do Iluminismo. Buscava a independência da região, mas foi descoberta antes de ocorrer. Tiradentes foi seu principal mártir.",
        materia_id: 6,
        subtopico_id: 26,
        dificuldade_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Brasil Império (subtopico_id: 27)
      {
        pergunta: "Quando e como ocorreu a Independência do Brasil?",
        resposta: "Ocorreu em 7 de setembro de 1822, quando Dom Pedro I proclamou a independência às margens do rio Ipiranga, rompendo os laços coloniais com Portugal.",
        materia_id: 6,
        subtopico_id: 27,
        dificuldade_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        pergunta: "O que foi o Poder Moderador na Constituição de 1824?",
        resposta: "Era um quarto poder, exclusivo do Imperador, que lhe dava autoridade para intervir nos outros três poderes (Executivo, Legislativo e Judiciário), garantindo a centralização do poder em suas mãos.",
        materia_id: 6,
        subtopico_id: 27,
        dificuldade_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        pergunta: "O que foi a Guerra do Paraguai e quais suas consequências para o Brasil?",
        resposta: "Foi o maior conflito armado da América do Sul (1864-1870), envolvendo Brasil, Argentina e Uruguai contra o Paraguai. Para o Brasil, resultou em alta dívida externa e no fortalecimento do Exército, que se tornou um ator político importante, contribuindo para a queda da monarquia.",
        materia_id: 6,
        subtopico_id: 27,
        dificuldade_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Brasil República (subtopico_id: 28)
      {
        pergunta: "O que foi a 'Política do Café com Leite' na República Velha?",
        resposta: "Foi um acordo político entre as oligarquias de São Paulo (grande produtor de café) e Minas Gerais (grande produtor de leite) para alternar a presidência da República entre políticos de seus estados.",
        materia_id: 6,
        subtopico_id: 28,
        dificuldade_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        pergunta: "O que foi a Era Vargas (1930-1945)?",
        resposta: "Foi o período em que Getúlio Vargas governou o Brasil, dividido em Governo Provisório, Governo Constitucional e o Estado Novo (uma ditadura). Caracterizou-se pela centralização do poder, industrialização e criação de leis trabalhistas.",
        materia_id: 6,
        subtopico_id: 28,
        dificuldade_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        pergunta: "O que foi o Golpe Militar de 1964 e quais suas principais características?",
        resposta: "Foi um golpe de estado que derrubou o presidente João Goulart e instaurou uma Ditadura Militar que durou até 1985. Caracterizou-se pela repressão política, censura, perseguição a opositores e supressão de direitos civis através de Atos Institucionais (como o AI-5).",
        materia_id: 6,
        subtopico_id: 28,
        dificuldade_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // História Geral (subtopico_id: 29)
      {
        pergunta: "O que foi o Renascimento?",
        resposta: "Foi um movimento cultural, artístico e científico que ocorreu na Europa entre os séculos XIV e XVI, caracterizado pela valorização da cultura greco-romana, do humanismo e do racionalismo.",
        materia_id: 6,
        subtopico_id: 29,
        dificuldade_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        pergunta: "O que foi a Revolução Francesa (1789)?",
        resposta: "Foi um grande movimento social e político que derrubou a monarquia absolutista na França e disseminou os ideais de 'Liberdade, Igualdade e Fraternidade', influenciando o mundo todo.",
        materia_id: 6,
        subtopico_id: 29,
        dificuldade_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        pergunta: "O que foi a Guerra Fria?",
        resposta: "Foi um período de tensão geopolítica (após a Segunda Guerra Mundial até 1991) entre os Estados Unidos (capitalista) e a União Soviética (socialista), e seus respectivos aliados. Foi marcada pela corrida armamentista e espacial, mas sem confronto militar direto entre as duas superpotências.",
        materia_id: 6,
        subtopico_id: 29,
        dificuldade_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Guerras Mundiais (subtopico_id: 30)
      {
        pergunta: "Qual foi o estopim da Primeira Guerra Mundial (1914-1918)?",
        resposta: "O assassinato do arquiduque Francisco Ferdinando, herdeiro do Império Austro-Húngaro, em Sarajevo, em 28 de junho de 1914.",
        materia_id: 6,
        subtopico_id: 30,
        dificuldade_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        pergunta: "O que foi o Tratado de Versalhes?",
        resposta: "Foi o acordo de paz assinado ao final da Primeira Guerra Mundial que impôs duras penalidades à Alemanha, culpando-a pela guerra, o que gerou ressentimento e é considerado uma das causas da Segunda Guerra.",
        materia_id: 6,
        subtopico_id: 30,
        dificuldade_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        pergunta: "O que foi o Dia D na Segunda Guerra Mundial?",
        resposta: "Foi o codinome para o desembarque das forças aliadas na Normandia, França, em 6 de junho de 1944. Foi a maior invasão marítima da história e marcou o início da libertação da Europa Ocidental do domínio nazista.",
        materia_id: 6,
        subtopico_id: 30,
        dificuldade_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // --- Geografia (materia_id: 7) ---
      // Geopolítica (subtopico_id: 31)
      {
        pergunta: "O que é Geopolítica?",
        resposta: "É o estudo da influência dos fatores geográficos (como localização, recursos naturais e território) nas relações de poder e na política entre os Estados.",
        materia_id: 7,
        subtopico_id: 31,
        dificuldade_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        pergunta: "O que foi a 'Nova Ordem Mundial' pós-Guerra Fria?",
        resposta: "Refere-se à reconfiguração do poder global após o fim da União Soviética, caracterizada pela hegemonia militar dos EUA (unipolaridade) e pela ascensão de múltiplos polos econômicos (multipolaridade), como Japão e União Europeia.",
        materia_id: 7,
        subtopico_id: 31,
        dificuldade_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        pergunta: "O que são os BRICS e qual seu objetivo?",
        resposta: "É um agrupamento de economias emergentes formado por Brasil, Rússia, Índia, China e África do Sul. Seu objetivo é a cooperação econômica e política para aumentar a influência desses países no cenário global.",
        materia_id: 7,
        subtopico_id: 31,
        dificuldade_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Climatologia (subtopico_id: 32)
      {
        pergunta: "Qual a diferença entre tempo e clima?",
        resposta: "Tempo refere-se às condições atmosféricas de um lugar em um curto período (ex: 'hoje está chovendo'). Clima é o padrão médio das condições atmosféricas de um lugar ao longo de um longo período (geralmente 30 anos).",
        materia_id: 7,
        subtopico_id: 32,
        dificuldade_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        pergunta: "O que é o Efeito Estufa e qual sua importância?",
        resposta: "É um fenômeno natural em que gases na atmosfera retêm parte do calor do Sol, mantendo a Terra aquecida e permitindo a vida. A intensificação desse efeito pelo homem causa o aquecimento global.",
        materia_id: 7,
        subtopico_id: 32,
        dificuldade_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        pergunta: "O que são os fenômenos El Niño e La Niña?",
        resposta: "São alterações na temperatura da superfície do Oceano Pacífico Equatorial. El Niño é o aquecimento anormal das águas, e La Niña é o resfriamento. Ambos afetam os padrões de chuva e temperatura em todo o mundo.",
        materia_id: 7,
        subtopico_id: 32,
        dificuldade_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Geografia do Brasil (subtopico_id: 33)
      {
        pergunta: "Quais são os seis biomas brasileiros?",
        resposta: "Amazônia, Cerrado, Mata Atlântica, Caatinga, Pampa e Pantanal.",
        materia_id: 7,
        subtopico_id: 33,
        dificuldade_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        pergunta: "O que são as Bacias Hidrográficas e qual a maior do Brasil?",
        resposta: "É uma área drenada por um rio principal e seus afluentes. A maior do Brasil (e do mundo) é a Bacia Amazônica.",
        materia_id: 7,
        subtopico_id: 33,
        dificuldade_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        pergunta: "Explique o processo de urbanização no Brasil.",
        resposta: "Foi um processo intenso e rápido, principalmente a partir da década de 1950, impulsionado pelo êxodo rural (saída de pessoas do campo para a cidade) e pela industrialização. Gerou um crescimento desordenado e problemas como a favelização.",
        materia_id: 7,
        subtopico_id: 33,
        dificuldade_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Demografia (subtopico_id: 34)
      {
        pergunta: "O que é a taxa de natalidade?",
        resposta: "É o número de nascidos vivos por mil habitantes em um determinado ano.",
        materia_id: 7,
        subtopico_id: 34,
        dificuldade_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        pergunta: "O que é a transição demográfica?",
        resposta: "É a passagem de um padrão de altas taxas de natalidade e mortalidade para um padrão de baixas taxas de natalidade e mortalidade, geralmente acompanhando o desenvolvimento socioeconômico de um país.",
        materia_id: 7,
        subtopico_id: 34,
        dificuldade_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        pergunta: "O que é uma pirâmide etária e como interpretar seu formato?",
        resposta: "É um gráfico que mostra a distribuição da população por idade e sexo. Uma base larga indica alta natalidade (país jovem). Um topo largo indica alta expectativa de vida (país envelhecido).",
        materia_id: 7,
        subtopico_id: 34,
        dificuldade_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Cartografia (subtopico_id: 35)
      {
        pergunta: "O que é escala em um mapa?",
        resposta: "É a relação matemática entre a distância em um mapa e a distância correspondente no terreno real.",
        materia_id: 7,
        subtopico_id: 35,
        dificuldade_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        pergunta: "Qual a diferença entre latitude e longitude?",
        resposta: "Latitude é a distância em graus de um ponto em relação à Linha do Equador (varia de 0° a 90° Norte ou Sul). Longitude é a distância em graus de um ponto em relação ao Meridiano de Greenwich (varia de 0° a 180° Leste ou Oeste).",
        materia_id: 7,
        subtopico_id: 35,
        dificuldade_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        pergunta: "O que são Projeções Cartográficas e por que elas sempre apresentam distorções?",
        resposta: "São técnicas para representar a superfície esférica da Terra em um plano (mapa). Elas sempre apresentam distorções (na área, forma, distância ou ângulo) porque é impossível planificar uma esfera sem deformá-la.",
        materia_id: 7,
        subtopico_id: 35,
        dificuldade_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // --- Inglês (materia_id: 8) ---
      // Vocabulário (subtopico_id: 36)
      {
        pergunta: "What is the difference between 'weather' and 'climate'?",
        resposta: "'Weather' is the short-term state of the atmosphere (e.g., sunny, rainy). 'Climate' is the long-term average weather pattern of a region.",
        materia_id: 8,
        subtopico_id: 36,
        dificuldade_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        pergunta: "Explain the meaning of 'borrow' and 'lend'.",
        resposta: "'To borrow' means to take something from someone with the intention of returning it (Eu pego emprestado). 'To lend' means to give something to someone for a short time (Eu empresto).",
        materia_id: 8,
        subtopico_id: 36,
        dificuldade_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        pergunta: "What are 'false friends' (or 'false cognates')? Give an example.",
        resposta: "They are words in two languages that look or sound similar, but have different meanings. Example: 'actually' in English means 'na verdade', not 'atualmente' (which is 'currently').",
        materia_id: 8,
        subtopico_id: 36,
        dificuldade_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Gramática (subtopico_id: 37)
      {
        pergunta: "When do you use 'do' and 'does' for questions in the Simple Present?",
        resposta: "Use 'do' with I, you, we, they. Use 'does' with he, she, it.",
        materia_id: 8,
        subtopico_id: 37,
        dificuldade_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        pergunta: "What is the difference between the Simple Past and the Present Perfect?",
        resposta: "Simple Past is used for actions that started and finished at a specific time in the past (e.g., 'I visited Paris in 2019'). Present Perfect is used for actions that happened at an unspecified time in the past or that have a connection to the present (e.g., 'I have visited Paris').",
        materia_id: 8,
        subtopico_id: 37,
        dificuldade_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        pergunta: "What are Modal Verbs and what are their main characteristics?",
        resposta: "They are auxiliary verbs that express modality (ability, permission, possibility, etc.), like can, could, may, might, must, should. They don't use '-s' for he/she/it, don't use 'do/does' for questions, and are followed by a base verb (e.g., 'She can swim').",
        materia_id: 8,
        subtopico_id: 37,
        dificuldade_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Interpretação de Texto (subtopico_id: 38)
      {
        pergunta: "What are 'skimming' and 'scanning' as reading techniques?",
        resposta: "'Skimming' is reading quickly to get a general idea of a text. 'Scanning' is looking for specific information in a text without reading it all.",
        materia_id: 8,
        subtopico_id: 38,
        dificuldade_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        pergunta: "What is the function of 'linking words' or 'connectors' in a text?",
        resposta: "They connect ideas, sentences, and paragraphs, showing the relationship between them (e.g., addition: 'furthermore'; contrast: 'however'; cause: 'because').",
        materia_id: 8,
        subtopico_id: 38,
        dificuldade_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        pergunta: "How can you infer the meaning of an unknown word from its context?",
        resposta: "By looking at the words and sentences around it, identifying synonyms, antonyms, examples, or the general logic of the text to guess the word's meaning.",
        materia_id: 8,
        subtopico_id: 38,
        dificuldade_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Listening (subtopico_id: 39)
      {
        pergunta: "What is a good strategy to practice listening skills?",
        resposta: "Listen to authentic materials like music, podcasts, movies, and series in English regularly, starting with subtitles and then trying without them.",
        materia_id: 8,
        subtopico_id: 39,
        dificuldade_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        pergunta: "Why is it difficult to understand native speakers sometimes?",
        resposta: "Because of connected speech (linking words together), reductions (like 'gonna' for 'going to'), different accents, and the speed of their speech.",
        materia_id: 8,
        subtopico_id: 39,
        dificuldade_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        pergunta: "What is the difference between 'top-down' and 'bottom-up' listening strategies?",
        resposta: "'Top-down' is using background knowledge and context to understand the main idea. 'Bottom-up' is focusing on individual sounds, words, and grammar to understand the message.",
        materia_id: 8,
        subtopico_id: 39,
        dificuldade_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Expressões Idiomáticas (subtopico_id: 40)
      {
        pergunta: "What does the idiom 'to bite the bullet' mean?",
        resposta: "It means to decide to do something difficult or unpleasant that one has been putting off or hesitating about.",
        materia_id: 8,
        subtopico_id: 40,
        dificuldade_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        pergunta: "What is the meaning of 'the best of both worlds'?",
        resposta: "It means a situation in which you can enjoy the advantages of two very different things at the same time.",
        materia_id: 8,
        subtopico_id: 40,
        dificuldade_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        pergunta: "Explain the idiom 'a blessing in disguise'.",
        resposta: "It refers to something that seems bad or unlucky at first, but results in something good happening later.",
        materia_id: 8,
        subtopico_id: 40,
        dificuldade_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // --- Sociologia (materia_id: 9) ---
      // Cultura (subtopico_id: 41)
      {
        pergunta: "O que é cultura, do ponto de vista sociológico?",
        resposta: "É o conjunto de conhecimentos, crenças, arte, moral, leis, costumes e todos os outros hábitos e capacidades adquiridos pelo ser humano como membro de uma sociedade.",
        materia_id: 9,
        subtopico_id: 41,
        dificuldade_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        pergunta: "Diferencie cultura material de cultura imaterial.",
        resposta: "Cultura material são os elementos físicos, concretos, criados por uma sociedade (ex: ferramentas, roupas, construções). Cultura imaterial são os elementos abstratos (ex: crenças, lendas, danças, linguagem).",
        materia_id: 9,
        subtopico_id: 41,
        dificuldade_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        pergunta: "O que é etnocentrismo?",
        resposta: "É a visão de mundo onde o nosso próprio grupo é tomado como centro de tudo e todos os outros são pensados e sentidos através dos nossos valores, nossos modelos e nossas definições. É julgar outras culturas a partir da sua.",
        materia_id: 9,
        subtopico_id: 41,
        dificuldade_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Cidadania (subtopico_id: 42)
      {
        pergunta: "O que é cidadania?",
        resposta: "É o conjunto de direitos e deveres de um indivíduo em um Estado. Envolve direitos civis, políticos e sociais.",
        materia_id: 9,
        subtopico_id: 42,
        dificuldade_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        pergunta: "Qual a diferença entre direitos civis, políticos e sociais?",
        resposta: "Civis: liberdades individuais (ir e vir, expressão). Políticos: participação nas decisões do Estado (votar, ser votado). Sociais: garantias de uma vida digna (saúde, educação, trabalho).",
        materia_id: 9,
        subtopico_id: 42,
        dificuldade_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        pergunta: "O que são Direitos Humanos?",
        resposta: "São direitos básicos e universais inerentes a todos os seres humanos, independentemente de raça, sexo, nacionalidade, etnia, idioma, religião ou qualquer outra condição. São garantidos por declarações e tratados internacionais.",
        materia_id: 9,
        subtopico_id: 42,
        dificuldade_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Trabalho (subtopico_id: 43)
      {
        pergunta: "O que é a Divisão Social do Trabalho?",
        resposta: "É a especialização de tarefas e funções dentro de uma sociedade, onde diferentes indivíduos e grupos realizam diferentes tipos de trabalho.",
        materia_id: 9,
        subtopico_id: 43,
        dificuldade_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        pergunta: "O que Karl Marx entende por 'alienação' no trabalho capitalista?",
        resposta: "É o processo pelo qual o trabalhador se torna estranho ao produto do seu trabalho, ao processo de trabalho, a si mesmo e aos outros, perdendo o controle e o sentido de sua atividade produtiva.",
        materia_id: 9,
        subtopico_id: 43,
        dificuldade_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        pergunta: "Diferencie os modelos de produção Fordismo e Toyotismo.",
        resposta: "Fordismo: produção em massa, linha de montagem rígida, grandes estoques. Toyotismo: produção flexível, 'just-in-time' (sem estoques), trabalhadores multifuncionais e foco na qualidade total.",
        materia_id: 9,
        subtopico_id: 43,
        dificuldade_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Política (subtopico_id: 44)
      {
        pergunta: "O que é Estado, segundo a sociologia?",
        resposta: "É uma instituição que detém o monopólio do uso legítimo da força física dentro de um determinado território (definição de Max Weber).",
        materia_id: 9,
        subtopico_id: 44,
        dificuldade_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        pergunta: "Quais são as três formas de governo segundo Aristóteles (formas puras)?",
        resposta: "Monarquia (governo de um), Aristocracia (governo de poucos, os melhores) e Democracia ou Politéia (governo de muitos, o povo).",
        materia_id: 9,
        subtopico_id: 44,
        dificuldade_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        pergunta: "O que é o 'Contrato Social' para os filósofos contratualistas (Hobbes, Locke, Rousseau)?",
        resposta: "É um acordo (tácito ou explícito) entre os membros de uma sociedade pelo qual eles renunciam a certas liberdades em troca da proteção e organização fornecidas por um Estado ou governo.",
        materia_id: 9,
        subtopico_id: 44,
        dificuldade_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Movimentos Sociais (subtopico_id: 45)
      {
        pergunta: "O que são movimentos sociais?",
        resposta: "São ações coletivas organizadas por grupos da sociedade que visam alcançar mudanças sociais, lutar por direitos ou resistir a transformações.",
        materia_id: 9,
        subtopico_id: 45,
        dificuldade_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        pergunta: "Cite exemplos de movimentos sociais importantes na história do Brasil.",
        resposta: "Movimento abolicionista, movimento operário, movimento feminista, movimento negro, movimento dos trabalhadores rurais sem terra (MST), Diretas Já.",
        materia_id: 9,
        subtopico_id: 45,
        dificuldade_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        pergunta: "Qual a diferença entre os 'velhos' e os 'novos' movimentos sociais?",
        resposta: "'Velhos' movimentos (como o operário) eram focados em questões de classe e econômicas. 'Novos' movimentos (a partir dos anos 60) focam em questões de identidade, cultura e direitos de minorias (feminismo, ambientalismo, movimento LGBTQIA+).",
        materia_id: 9,
        subtopico_id: 45,
        dificuldade_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // --- Filosofia (materia_id: 10) ---
      // Ética (subtopico_id: 46)
      {
        pergunta: "Qual a diferença entre Ética e Moral?",
        resposta: "Moral é o conjunto de regras e costumes de uma sociedade em uma determinada época. Ética é a reflexão filosófica sobre a moral, buscando entender seus fundamentos e princípios.",
        materia_id: 10,
        subtopico_id: 46,
        dificuldade_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        pergunta: "O que é o Imperativo Categórico de Immanuel Kant?",
        resposta: "É um princípio ético que diz que uma ação é moralmente correta apenas se a regra por trás dela puder ser universalizada, ou seja, se puder ser aplicada a todas as pessoas sem contradição.",
        materia_id: 10,
        subtopico_id: 46,
        dificuldade_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        pergunta: "O que é o Utilitarismo, como proposto por Jeremy Bentham e John Stuart Mill?",
        resposta: "É uma teoria ética que afirma que a ação moralmente correta é aquela que maximiza a felicidade e o bem-estar para o maior número de pessoas.",
        materia_id: 10,
        subtopico_id: 46,
        dificuldade_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Epistemologia (subtopico_id: 47)
      {
        pergunta: "O que é Epistemologia?",
        resposta: "É o ramo da filosofia que estuda a natureza, a origem e os limites do conhecimento. Também é conhecida como Teoria do Conhecimento.",
        materia_id: 10,
        subtopico_id: 47,
        dificuldade_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        pergunta: "Diferencie Racionalismo de Empirismo.",
        resposta: "Racionalismo (ex: Descartes) defende que a razão é a principal fonte de conhecimento. Empirismo (ex: John Locke) defende que o conhecimento deriva principalmente da experiência sensorial.",
        materia_id: 10,
        subtopico_id: 47,
        dificuldade_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        pergunta: "O que é o 'Apriorismo Kantiano' ou 'Criticismo'?",
        resposta: "É a tentativa de Immanuel Kant de superar a disputa entre racionalismo e empirismo, argumentando que o conhecimento começa com a experiência, mas é organizado por estruturas a priori da mente (como espaço, tempo e as categorias).",
        materia_id: 10,
        subtopico_id: 47,
        dificuldade_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Filosofia Antiga (subtopico_id: 48)
      {
        pergunta: "Qual a famosa frase atribuída a Sócrates e o que ela significa?",
        resposta: "'Só sei que nada sei'. Significa o reconhecimento da própria ignorância como o primeiro passo para a busca do verdadeiro conhecimento.",
        materia_id: 10,
        subtopico_id: 48,
        dificuldade_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        pergunta: "O que é a 'Alegoria da Caverna' de Platão?",
        resposta: "É uma metáfora sobre a condição humana perante o conhecimento. Ilustra a passagem do mundo das aparências (sombras na caverna) para o mundo das ideias ou formas verdadeiras (o mundo exterior iluminado pelo sol).",
        materia_id: 10,
        subtopico_id: 48,
        dificuldade_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        pergunta: "O que são as Quatro Causas segundo Aristóteles?",
        resposta: "São quatro explicações para a existência de algo: Causa Material (do que é feito?), Causa Formal (qual a sua forma ou essência?), Causa Eficiente (o que o fez?) e Causa Final (qual a sua finalidade ou propósito?).",
        materia_id: 10,
        subtopico_id: 48,
        dificuldade_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Filosofia Moderna (subtopico_id: 49)
      {
        pergunta: "Qual o princípio fundamental do pensamento de René Descartes?",
        resposta: "'Penso, logo existo' (Cogito, ergo sum). É a primeira certeza indubitável que ele alcança após aplicar a dúvida metódica.",
        materia_id: 10,
        subtopico_id: 49,
        dificuldade_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        pergunta: "O que John Locke queria dizer com 'tábula rasa'?",
        resposta: "Ele defendia que a mente humana nasce como uma 'folha em branco' (tábula rasa), sem ideias inatas. Todo o conhecimento seria adquirido através da experiência.",
        materia_id: 10,
        subtopico_id: 49,
        dificuldade_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        pergunta: "O que é o 'bom selvagem' para Jean-Jacques Rousseau?",
        resposta: "É a ideia de que o ser humano em seu estado de natureza é inerentemente bom, puro e livre. Seria a sociedade, com suas instituições e desigualdades, que o corromperia.",
        materia_id: 10,
        subtopico_id: 49,
        dificuldade_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Existencialismo (subtopico_id: 50)
      {
        pergunta: "Qual é o lema central do existencialismo de Jean-Paul Sartre?",
        resposta: "'A existência precede a essência'. Isso significa que o ser humano primeiro existe, e só depois, através de suas escolhas e ações, define quem ele é (sua essência).",
        materia_id: 10,
        subtopico_id: 50,
        dificuldade_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        pergunta: "O que Sartre quer dizer com 'o homem está condenado a ser livre'?",
        resposta: "Significa que o ser humano não pode escapar da liberdade de escolher. Mesmo não escolher já é uma escolha. Somos totalmente responsáveis por tudo o que fazemos de nós mesmos.",
        materia_id: 10,
        subtopico_id: 50,
        dificuldade_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        pergunta: "O que é o 'Mito de Sísifo' para Albert Camus?",
        resposta: "É uma metáfora para a condição humana. Sísifo, condenado a rolar uma pedra montanha acima eternamente, representa o absurdo da vida (a busca por sentido em um universo sem sentido). A felicidade está em reconhecer e se revoltar contra esse absurdo, encontrando valor na própria luta.",
        materia_id: 10,
        subtopico_id: 50,
        dificuldade_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('flashcards', null, {});
  }
};
