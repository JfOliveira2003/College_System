import express from 'express';


const app = express();

const port : number = 3000;

app.get('/', (req, res) => {
    res.send('Hello world');
})

app.listen(port, () => {
    console.log('Running')
})