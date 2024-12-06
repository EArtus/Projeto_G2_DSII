const express = require("express");
const app = express();

let users = [
  { id: 1, name: "Usuário 1", email: "usuario1@example.com" },
  { id: 2, name: "Usuário 2", email: "usuario2@example.com" },
  { id: 3, name: "Teste", email: "teste@gmail.com" }, 
];

// Middleware para processar JSON no corpo da requisição
app.use(express.json());

// Rota para listar usuários
app.get("/users", (req, res) => {
  res.json(users);
});

// Dados simulados para coletas
const collections = [
    {
      id: 1,
      type: "Plástico",
      quantity: "5 sacos",
      date: "2024-12-10T14:00:00Z",
      address: "Rua Exemplo, 123",
    },
    {
      id: 2,
      type: "Vidro",
      quantity: "3 caixas",
      date: "2024-12-15T10:00:00Z",
      address: "Avenida Principal, 456",
    },
    {
        id: 3,
        type: "Seco",
        quantity: "1",
        date: "2024-12-10T14:12:00Z",
        address: "Rua Teste, 123",
      },
  ];
  
  // Endpoint GET /collections
  app.get("/collections", (req, res) => {
    res.json(collections);
  });
  
  // Inicia o servidor
  app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000");
  });

// Rota para adicionar usuários
app.post("/users", (req, res) => {
  const { name, email } = req.body;

  // Validação simples
  if (!name || !email) {
    return res.status(400).json({ error: "Nome e email são obrigatórios." });
  }

  // Adicionar o novo usuário
  const newUser = { id: users.length + 1, name, email };
  users.push(newUser);

  res.status(201).json(newUser);
});

// Iniciar o servidor
app.listen(3000, "0.0.0.0", () => {
  console.log("Servidor rodando em http://localhost:3000");
});
