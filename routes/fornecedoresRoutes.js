const express = require("express");
const router = express.Router();

let fornecedores = [
  {
    id: 1,
    razaoSocial: "blusa jeans",
    cnpj: "675765657675657",
    email: "fornecedor@gmail.com",
    telefone: "119253745",
    cidade: "SP",
  },
   {
  id: 2,
    razaoSocial: "bonitinha",
    cnpj: "bunitinha@gmail.com",
    email: "fornecedor@gmail.com",
    telefone: "1194553745",
    cidade: "SP",
  },
  {
  id: 3,
    razaoSocial: "inha",
    cnpj: "inha@gmail.com",
    email: "edor@gmail.com",
    telefone: "1192853745",
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