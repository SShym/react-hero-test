const bodyParser = require("body-parser");
const cors = require("cors");
const express = require('express');
const Database = require('./Database/Database'); 
const app = express();
const heroRouter = require('./routers/heroRouter');

const PORT = process.env.PORT;

app.use(cors());

Database();

app.get("/", async (req, res) => { 
    res.send('Server running!') 
});

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));

app.use(heroRouter);

app.listen(PORT, () => console.log(`Server started on ${PORT}`));
