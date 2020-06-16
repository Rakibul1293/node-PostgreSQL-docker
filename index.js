const express = require('express');
const app = express();
const pg = require('pg');

const PORT = 3000;

pg.connect('postgres://postgres:postgres@localhost:5432/nodePostgreDocker');

app.listen(PORT, () => console.log(`Server running on ${PORT}`));

app.get('/', (req, res) => res.status(200).send('Hi !!!'));
