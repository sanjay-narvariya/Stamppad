var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors=require('cors');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');


var categoryRouter = require('./routes/category');
var subcategoryRouter = require('./routes/subcategory');
var productRouter = require('./routes/product');
var useraddressRouter = require('./routes/useraddress');
// var stampRouter = require('./routes/stamp');
// var imprintRouter = require('./routes/imprint');
// var packagingRouter = require('./routes/packaging');
// var coloursRouter = require('./routes/colours');
// var sparepadRouter = require('./routes/sparepad');
var oneProductRouter = require('./routes/oneproduct');
 var mainbannerRouter = require('./routes/mainbanner');

var adminsignupRouter = require('./routes/adminsignup');
var adminloginRouter = require('./routes/adminlogin');
var userInterfaceRouter = require('./routes/userinterface');


var app = express();
//app.use("/images",express.static("public/images"))

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
 app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.use('/', indexRouter);
app.use('/users', usersRouter);


app.use('/category', categoryRouter);
app.use('/subcategory', subcategoryRouter);
app.use('/product', productRouter);
app.use('/useraddress', useraddressRouter);
// app.use('/stamp', stampRouter);
// app.use('/imprint', imprintRouter);
// app.use('/packaging', packagingRouter);
// app.use('/colours', coloursRouter);
// app.use('/sparepad', sparepadRouter);
 app.use('/oneproduct', oneProductRouter);
 app.use('/mainbanner', mainbannerRouter);
 
app.use('/adminsignup', adminsignupRouter);
app.use('/adminlogin',adminloginRouter);
app.use('/userinterface',userInterfaceRouter);

 
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



app.use((err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    return res.status(400).json({ message: "Multer error", error: err.message });
  }
  res.status(500).json({ message: "Internal server error" });
});


app.listen(9000, () => {
  console.log(`app is listening on ${9000}`);

})

module.exports = app;
