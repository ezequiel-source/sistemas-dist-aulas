const express = require('express');
const bodyParser = require('body-parser');
app = express();
lembretes = {};
contador = 0;

app.get('/lembretes', (req, res) => {
  res.send(lembretes);
});
app.put('/lembretes', (res, req) => {
  contador++;
  const { texto } = req.body;
  lembretes[contador] = {
    contador, texto
  }
  res.status(201).send(lembretes[contador]);
});

app.post("/eventos", (res, req) => {
  console.log(req.body);
  res.status(200).send({ msg: "ok"});
});

app.listen(4000, () => {
    console.log('Lembretes. Porta 4000');
});