const models = require("../models")
exports.get_landing = function(req, res, next) {
  res.render("landing", { title: "Express" })
}
//this will render from template
//"index.pug" used, second is key value pair.
//express
exports.submit_lead = function(req, res, next) {
  console.log("lead email:", req.body.lead_email)
  return models.Lead.create({
    email: req.body.lead_email
  }).then(lead => {
    res.redirect("/")
  })
}
