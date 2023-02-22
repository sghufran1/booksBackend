const express = require('express');
const booksRouter = require('./routes/books.js');
const indexRouter = require('./index.js');


const app = express();

app.use(express.json());

app.use('/', indexRouter);
app.use('/books', booksRouter);


app.listen(8080, ()=> {
     console.log('Server running on 8080');
});




