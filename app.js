import {apiDogs} from './apis.js'
import express from 'express';
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello world!');
})

app.get('/api/v1/test', (req, res) => {
    res.setHeader('Content-Type', 'text/json');
    res.send(apiDogs());
})

app.listen(port, () => {
    console.log(`Server is listening on port: ${port}`);
})