const express = require("express");
const path = require("path");
const hbs = require("hbs");

const app = express();
const PORT = 3000;

// Подключаем шаблонизатор HBS
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "template"));
hbs.registerPartials(path.join(__dirname, "widgets"));

// Раздача статики (стили, скрипты и т.д.)
app.use(express.static(__dirname));

// Маршрут
app.get("/", function (req, res) {
  res.render("index.hbs");
});

app.listen(PORT, () => {
  console.log(`🔥 Сервер работает на http://localhost:${PORT}`);
});
