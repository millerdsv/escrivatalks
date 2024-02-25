require('dotenv').config({ path: `.env.${process.env.NODE_ENV || 'development'}` });
const express = require('express');
const routes = require("./src/app/routes")

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send("Hello World");
});

app.use("/api/v1", routes);

app.listen(port, ()=> console.log(`app listen on port ${port}`))