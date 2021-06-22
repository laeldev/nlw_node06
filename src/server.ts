import express from "express";

const app = express();

app.get("/test", (request, response)=> {
  
  response.send("Ola NLW, Metodo GET");
});

app.post("/test-post", (request, response)=> {

  response.send("Ola NLW, Metodo POST");
});

app.listen(3000, () => console.log("Servidor Rodando"));