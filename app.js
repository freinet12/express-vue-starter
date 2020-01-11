require('dotenv').config();
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const hbs = require('express-handlebars');

const webRouter = require('./routes/web');
const apiRouter = require('./routes/api');
const usersRouter = require('./routes/users');
const models = require('./app/models');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, './resources/views'));
app.engine('hbs', hbs({defaultLayout: 'main', extname: '.hbs'}));
app.set('view engine', 'hbs');
app.enable('view cache');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, './public')));

app.use(cookieParser());
app.use('/', webRouter);
app.use('/api', apiRouter);
app.use('/users', usersRouter);

//Sync the DB
/* 
** un-comment this after you've setup a database
models.sequelize.sync().then( () => {
    console.log('Database synced successfully!');
}).catch( (err) => {
    console.error(err, "Something went wrong");
});
*/

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
