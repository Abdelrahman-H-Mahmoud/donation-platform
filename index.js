const express = require('express');
const routes = require('./src/routes');
const { connect } = require("./src/db");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', routes);


app.listen(process.env.PORT || 3000, () => {
    console.info("Server Up And Running");
    connect();
});