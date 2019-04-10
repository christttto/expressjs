exports.get_landing = function(req, res, next) {
  res.render("landing", { title: "Express" })
}
//this will render from template
//"index.pug" used, second is key value pair.
//express
