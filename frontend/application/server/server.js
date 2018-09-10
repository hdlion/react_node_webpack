// import 'babel-polyfill';
const express = require('express');
// import renderMiddleware from './middlewares/renderMiddleware/renderMiddleware';

const app = express();

app.use('*', renderMiddleware);

// app.set('port', process.env.PORT || 7000);
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {

});
