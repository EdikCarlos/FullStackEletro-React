const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require('cors');
// const bcrypt = require("bcryptjs");
const bodyParser = require('body-parser');



// model
require("../conexaoMongo/models/comentarios");
const Comentario = mongoose.model("comentarios");
// Minha Conexão com o banco
require("./dbase/connection");

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());  


app.get("/mostrar", async (req, res) => {
  const usuarioResponse = await Comentario.find();
  const usuarioJson = await usuarioResponse;

  res.json(usuarioJson);
});

app.post("/comentarios", (req, res) => {
    const novoComentario = new Comentario({
      nome: req.body.nome,
      msg: req.body.msg,
      
  })
  
  // res.send(<script>window.location.href="http://localhost:3000/contato.php"</script>);
  novoComentario.save();
  // res.json ({message: "Cadastro efetuado!", comentario: novoComentario});
  res.redirect('http://localhost:3000/contato.php');
});

app.listen(3333);