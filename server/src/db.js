const mongoose = require('mongoose');

const connect = () => {
    mongoose.connect('mongodb://localhost:27017/donatation_db', { useUnifiedTopology: true, useNewUrlParser: true }).then(() => {
        console.log("DB Connected");
    }).catch(err => {
        console.log("DB Error:", err);
    });
}

module.exports = { connect };