var createError = require("http-errors") //import modules found under package json dependecies
var express = require("express") //requires express.
var path = require("path")
var cookieParser = require("cookie-parser")
var logger = require("morgan")

var indexRouter = require("./routes/index")
var usersRouter = require("./routes/users")

var app = express() //calling an instance of express. vanilla probably.

// view engine setup
app.set("views", path.join(__dirname, "views")) //views included in views directory
app.set("view engine", "pug") //use pug as view engine

app.use(logger("dev"))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, "public"))) //certin use configuration

app.use("/", indexRouter) //index router that uese the variable. our application will use with slash route.
app.use("/users", usersRouter)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404))
})

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get("env") === "development" ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render("error")
})

module.exports = app
