const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const metricsRoutes = require("./routes/metrics");

app.use("/metrics", metricsRoutes);

app.listen(3001, () => {
  console.log("Server rodando na porta 3001");
});