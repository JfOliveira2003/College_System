import express from 'express';

const auth = require('./server')
const app = express();
const port : number = 3000; 


app.use(auth.about);

app.use(auth.auth)
app.use(auth.test);
app.listen(port);