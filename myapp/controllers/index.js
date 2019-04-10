exports.index = function(req, res, next) {
  res.render("index", { title: "Express" })
}
//this will render from template
//"index.pug" used, second is key value pair.
//express
