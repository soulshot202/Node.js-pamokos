const PORT = 3000;
import express from "express";
import routes from "./routes.js";

const app = express();
app.use(routes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
