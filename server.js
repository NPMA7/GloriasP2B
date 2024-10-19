const express = require("express");
const path = require("path");
const fs = require("fs");
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json()); // Middleware to parse JSON
app.use(express.static(path.join(__dirname, 'public/')));

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
app.get('/admin', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'view/updateAPI.html'));
});

app.get('/api/DataBasket.json', (req, res) => {
    const filePath = path.join(__dirname, '/api/DataBasket.json');
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Error reading file' });
        }
        res.setHeader('Content-Type', 'application/json');
        res.send(data);
    });
});

// PUT route to handle saving data
app.put('/api/DataBasket.json', (req, res) => {
    const filePath = path.join(__dirname, '/api/DataBasket.json');
    let jsonData = req.body;

    fs.writeFile(filePath, JSON.stringify(jsonData, null, 2), (err) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Error saving data' });
        }
        res.status(200).json({ message: 'Data saved successfully' });
    });
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
