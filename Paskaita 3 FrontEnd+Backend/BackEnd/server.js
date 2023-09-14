import express from "express";
import router from "./routes.js";
import cors from "cors";

const PORT = 3000;

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);
//app.use(express.json());  reikia parasyti kad s\dirbtu su json failais

app.listen(PORT, () => {
  console.log("server is running on port 3000");
});
