const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    aplicacao: "API Seminário Grafana",
    status: "online",
    mensagem: "API funcionando corretamente"
  });
});

app.get("/api/test", (req, res) => {
  res.json({
    status: "sucesso",
    mensagem: "Requisição recebida com sucesso",
    timestamp: new Date().toISOString()
  });
});

app.get("/api/users", (req, res) => {
  res.json([
    { id: 1, nome: "Alice" },
    { id: 2, nome: "Bruno" },
    { id: 3, nome: "Carla" }
  ]);
});

app.get("/api/error", (req, res) => {
  res.status(500).json({
    status: "erro",
    mensagem: "Erro simulado para monitoramento"
  });
});

app.get("/metrics", (req, res) => {
  res.set("Content-Type", "text/plain");

  res.send(
`# HELP api_up Indica se a API esta online
# TYPE api_up gauge
api_up 1
`
  );
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`API executando em http://localhost:${PORT}`);
});