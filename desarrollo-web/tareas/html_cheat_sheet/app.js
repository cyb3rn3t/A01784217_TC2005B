const express = require('express');
const fs = require('fs');
const app = express();

app.use(express.json());
app.use(express.static("public"));

app.get("/", (req, res) => {
    const data = fs.readFileSync(__dirname + "/public/html/hello.html");
    res.send(data.toString());
});

app.get("/pagina2", (req, res) => {
    const data = fs.readFileSync(__dirname + "/public/html/pagina2.html");
    res.send(data.toString());
});

app.use((req, res) => {
    res.status(404).send('Sorry, we cannot find that!');
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});