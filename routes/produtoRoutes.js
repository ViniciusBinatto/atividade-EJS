const express = require("express");
const router = express.Router();

let produtos = [
  {
    id: 1,
    nome: "brinquedos",
    descricao: "de criança",
    preco: "1192853745",
    estoque: "35",
    categoria: "brinquedo",
  },
   {
    id: 2,
    nome: "celular",
    descricao: "motorola",
    preco: "1199",
    estoque: "5",
    categoria: "eletronico",
  },
  {
    id: 3,
    nome: "garrafa",
    descricao: "de agua",
    preco: "19",
    estoque: "999",
    categoria: "garrafa de agua",
  },
];

router.get("/", (req, res) => {
    res.render("produtos/index", {
        produtos: produtos
    });
});

router.get("/cadastro", (req, res) => {
    res.render("produtos/form-cadastro");
});

router.post("/", (req, res) =>{
    const {nome, descricao, preco, estoque, categoria} = req.body;
    const novaCategoria = {
        id: produtos.length + 1, // aumenta o id quando cria nova coisinha
        nome: nome,
        descricao: descricao,
        preco: preco,
        estoque: estoque,
        categoria: categoria
    }; 
    produtos.push(novaCategoria);
    res.redirect("/produtos");
});

module.exports = router;