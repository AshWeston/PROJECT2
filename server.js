var express = require('express');
var path = require('path');
const sequelize = require('./config/connection');

var app = express();
const PORT = process.env.PORT || 3001;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile('index.html');
})

sequelize.sync({ force: true}).then(() => {
    app.listen(PORT, () => console.log(`Server running on: https://localhost:${PORT}`));
});
module.exports = app;
