import express from 'express';

const route = require('./routes')
const app = express();
const port : number = 3000; 


app.use(route.about);

app.use(route.Login);

app.use(route.auth)
app.use(route.test);
app.listen(port);