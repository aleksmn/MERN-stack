const { MongoClient } = require("mongodb");
const express = require("express");

let db;
const port = 3000;

const app = express();



app.set("view engine", "ejs")
app.set("views", "./views")
app.use(express.static("public"))

app.get("/", async (req, res) => {
    const allAnimals = await db.collection("animals").find().toArray()

    console.log(allAnimals)

    // res.send("Привет из главной страницы")
    // res.send(`<h1>Привет всем!</h1> ${allAnimals.map(animal => `<p>${animal.name} - ${animal.species}</p>`).join("")}`)
    res.render("home", {allAnimals})
})

app.get("/admin", (req, res) => {
    // res.send("Страница администратора")
    res.render("admin")
})

async function start() {
    const client = new MongoClient("mongodb://root:root@localhost:27017/FirstMernApp?&authSource=admin")
    await client.connect()
    db = client.db()

    app.listen(port, () => {
        console.log(`App listening on http://localhost:${port}`);
    });

}

start()

