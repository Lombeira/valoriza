import express from "express";

const app = express();

app.get("/test", (request, response) => {
  return response.send("Chupa meu get");
});

app.post("/test-post", (request, response) => {
  return response.send("Chupa meu post");
});

app.listen(3000, () => console.log("server is running"));
