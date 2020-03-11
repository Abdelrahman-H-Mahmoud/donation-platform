const express = require('express');
const routes = require('./src/routes');
const { connect } = require("./src/db");
const cors=require('cors');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', routes);

app.use(express)
app.listen(process.env.PORT || 3000, () => {
    console.info("Server Up And Running on port", process.env.PORT );
    connect();
});