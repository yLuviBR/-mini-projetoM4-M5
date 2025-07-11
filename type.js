// Importa os pacotes necessários
const express = require('express');
const cors = require('cors');

const app = express(); // Inicializa o app com Express
const PORT = 3000;     // Porta onde a API vai rodar

app.use(cors()); // Ativa o CORS para permitir requisições externas

// ====== Dados simulados ======

// Dados de desmatamento na Amazônia
const amazoniaData = {
  ano: 2024,
  mes: 'Março',
  areaDesmatadaKm2: 812.3,
  fonte: 'Dados simulados do INPE'
};

// Lista de dicas ecológicas
const ecoDicas = [
  "Apague as luzes ao sair de um cômodo.",
  "Reduza o uso de plástico descartável.",
  "Plante uma árvore na sua comunidade.",
  "Use transporte público ou carona sempre que possível.",
  "Reutilize materiais e evite o desperdício."
];

// Dados de qualidade do ar por cidade
const qualidadeAr = {
  "São Paulo": {
    indice: 47,
    classificacao: "Boa",
    poluentes: "Material Particulado (MP2.5)"
  },
  "Rio de Janeiro": {
    indice: 62,
    classificacao: "Moderada",
    poluentes: "Ozônio (O3)"
  },
  "Brasília": {
    indice: 35,
    classificacao: "Boa",
    poluentes: "Dióxido de Nitrogênio (NO2)"
  }
};

// ====== Rotas da API ======

// Rota que retorna dados da Amazônia
app.get('/amazonia', (req, res) => {
  res.json(amazoniaData);
});

// Rota que retorna uma dica aleatória de sustentabilidade
app.listen(PORT, function () {
  console.log(" EcoInfo API rodando em http://localhost:" + PORT);
});