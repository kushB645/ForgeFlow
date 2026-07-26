const app = require("./app");

const port = 3000;

app.listen(port , () => {
    console.log("server is running at port " + port);
});