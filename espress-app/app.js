const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/books');
const router = require('./routes/index');

const app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

const books = [];

router.get('/', function (req, res) {
  return res.send(books).status(200).end();
});

router.post('/books', function (req, res) {
  console.log('post', req.body);
  books.push(req.body);

  return res.send(req.body).status(200).end();
});

router.put('/:id', (req, res)  => {
  if (!Number(req.params.id)) {
    return res.status(400).send({ error: `${req.params.id} is not a valid id `}).end();
  }
  const body = {
    author: req.body.author,
    name: req.body.name,
    release: req.body.release,
    collection: req.body.collection
  };
  console.log('put', req.body, req.params);

  const book = books.find((_book) => _book.id === Number(req.params.id));
  console.log({ book });

  Object.assign(book, body);

  return res.send(body).status(200).end();
});

router.delete('/books/:id', function (req, res) {
  const book = students.findIndex((_book) => _book._id === Number(req.params.id));
  if (book === -1) {
    return res.send({ deleted: true }).status(200).end();
  }

  books.splice(student, 1);

  return res.send({ deleted: true }).status(200).end();
});
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
