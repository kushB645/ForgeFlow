require('dotenv').config();

const app = require("./app");
const { default: dbConnection } = require('./db/index.js');

const port = 3000;

app.listen(port , () => {
    console.log("server is running at port " + port);
});

dbConnection();