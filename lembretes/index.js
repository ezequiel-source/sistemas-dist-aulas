const express = require('express');
const bodyParser = require('body-parser');
app = express();
app.use(bodyParser.json());

lembretes = {};
contador = 0;

app.get('/lembretes', (req, res) => {
  res.send(observacoesPorLembreteId[req.params.id] || []);
});

app.put('/lembretes', (req, res) => {
  contador++;
  const { texto } = req.body;
  lembretes[contador] = {
    contador, texto
  }
  res.status(201).send(lembretes[contador]);
});

app.post("/eventos", (req, res) => {
  console.log(req.body);
  res.status(200).send({ msg: "ok"});
});

app.listen(4000, () => {
    console.log('Lembretes. Porta 4000');
});