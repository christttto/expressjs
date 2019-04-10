var express = require("express")
var router = express.Router() //vanilla instance

/*web framework express js
  router logic lives here
*/
/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Express" })
})

module.exports = router
