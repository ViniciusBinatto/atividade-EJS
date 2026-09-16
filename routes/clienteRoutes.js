const express = require("express");
const router = express.Router();

let clientes = [
  {
    id: 1,
    nome: "Maria Dudinha",
    email: "dudinha@gmail.com",
    telefone: "1192853745",
    cidade: "SP",
  },
   {
    id: 2,
    nome: "Tonia",
    email: "tonya@gmail.com",
    telefone: "1198264393",
    cidade: "MG",
  },
  {
    id: 3,
    nome: "Lucas silva",
    email: "luquinhas@gmail.com",
    telefone: "1196423464",
    cidade: "SP",
  },
];

router.get("/", (req, res) => {
    res.render("clientes/index", {
        clientes: clientes
    });
});

router.get("/cadastro", (req, res) => {
    res.render("clientes/form-cadastro");
});

router.post("/", (req, res) =>{
    const {nome, email, telefone, cidade} = req.body;
    const novaCategoria = {
        id: clientes.length + 1, // aumenta o id quando cria nova coisinha
        nome: nome,
        email: email,
        telefone: telefone,
        cidade: cidade
    }; 
    clientes.push(novaCategoria);
    res.redirect("/clientes");
});

module.exports = router;
