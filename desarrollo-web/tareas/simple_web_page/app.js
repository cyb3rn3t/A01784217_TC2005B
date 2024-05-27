const express = require('express');
const fs = require('fs');
const app = express();

app.use(express.json());
app.use(express.static("public"));

app.get("/", (req, res) => {
    const data = fs.readFileSync(__dirname + "/public/html/simple_web_page.html");
    res.send(data.toString());
});

app.use((req, res) => {
    res.status(404).send('boo, we cannot find that!');
});

app.listen(3000, () => {
    console.log("server is running on port 3000");
});