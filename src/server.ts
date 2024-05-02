require("dotenv").config()
import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import appsRouter from './routes/apps.router'

const app = express();
const port = process.env.PORT;

app.use(cors()); // Enable CORS
app.use(bodyParser.json()); // Parse JSON bodies
app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded bodies

app.use("/apps", appsRouter)

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
