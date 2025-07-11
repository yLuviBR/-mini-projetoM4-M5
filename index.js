// Importa os pacotes necessários
const express = require('express');
const cors = require('cors');

const app = express(); // Inicializa o servidor Express
const PORT = 3000;     // Define a porta da API

app.use(cors());       // Ativa o CORS para aceitar requisições externas

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

// Qualidade do ar por cidade
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

// Rota 1: Dados da Amazônia
app.get('/amazonia', (req, res) => {
  res.json(amazoniaData);
});

// Rota 2: Dica aleatória
app.get('/dicas', (req, res) => {
  const randomIndex = Math.floor(Math.random() * ecoDicas.length);
  res.json({ dica: ecoDicas[randomIndex] });
});

// Rota 3: Qualidade do ar
app.get('/qualidade-ar', (req, res) => {
  res.json(qualidadeAr);
});

// Inicia o servidor na porta definida
app.listen(PORT, () => {
  console.log(`✅ EcoInfo API rodando em http://localhost:${PORT}`);
});
