import express from "express";
import routes from "./routes.js";
const PORT = 3000;

const app = express();
app.use(routes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
