const express = require("express");
const router = express.Router();

let fornecedores = [
  {
    id: 1,
    razaoSocial: "PETROLEO BRASILEIRO S A PETROBRAS",
    cnpj: "44.592.677/0001-31",
    email: "fornecedor@gmail.com",
    telefone: "119253745",
    cidade: "SP",
  },
   {
  id: 2,
    razaoSocial: "AMBEV S.A.",
    cnpj: "94.437.438/0001-85",
    email: "fornecedor@gmail.com",
    telefone: "11945538751",
    cidade: "SP",
  },
  {
  id: 3,
    razaoSocial: "MAGAZINE LUIZA S/A",
    cnpj: "34.095.530/0001-82",
    email: "edor@gmail.com",
    telefone: "1198643845",
    cidade: "SP",
  },
];

router.get("/", (req, res) => {
    res.render("fornecedores/index", {
       fornecedores : fornecedores
    });
});

router.get("/cadastro", (req, res) => {
    res.render("fornecedores/form-cadastro");
});

router.post("/", (req, res) =>{
    const {razaoSocial, cnpj, email, telefone, cidade} = req.body;
    const novaCategoria = {
        id: fornecedores.length + 1, // aumenta o id quando cria nova coisinha
        razaoSocial: razaoSocial,
        cnpj: cnpj,
        email: email,
        telefone: telefone,
        cidade: cidade
    }; 
    fornecedores.push(novaCategoria);
    res.redirect("/fornecedores");
});

module.exports = router;
