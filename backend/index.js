const express = require("express");

const app = express();

app.get("/", (req, res) => {
  return res.json({
    evento: "Semana Omnistack",
    aluno: "Iago Gabino"
  });
});

app.listen(3333);
