const dotenv = require('dotenv');
const express = require('express');
const path = require('path');

dotenv.config({
    path: path.resolve(__dirname, '..', '.env')
});

const userRoutes = require('./routes/user.routes');

const PORT = process.env.PORT || 3000;

const publicPath = path.join(__dirname, '..', 'public');
const pagesPath = path.join(publicPath, 'pages');
const assetsPath = path.join(publicPath, 'assets');

const app = express();
app.use(express.json());

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});

app.use("/", express.static(pagesPath));
app.use("/assets", express.static(assetsPath));

app.use("/users", userRoutes);