import dotenv from 'dotenv';
import express from 'express';
import routes from './routes.js';

const app = express();

dotenv.config();

const { PORT } = process.env;
app.use(routes);

app.listen(PORT, () => console.log(`Server running on port ${PORT} `));
