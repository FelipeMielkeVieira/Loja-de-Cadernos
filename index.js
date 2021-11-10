const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 8080;

app.get('/', function (requisicao,resposta) {
    resposta.sendFile(path.join(_dirname, '/index.html'));
})


app.listen(port);
console.log("Server started at http://localhost:" + port);

