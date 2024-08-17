const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, 'public/'))); // Menyajikan file statis dari folder public

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'view/index.html'));
});
app.get('/team', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'view/team.html'));
});
app.get('/programs', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'view/programs.html'));
});
app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'view/contact.html'));
});
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
