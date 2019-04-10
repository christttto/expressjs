var express = require("express")
var router = express.Router() //vanilla instance

/*web framework express js
  router logic lives here
*/
/* GET home page. */
/**
 * want to seperate the root
 * logic  that matches url pattern is here
 * but also the handler logic is defined
 * part of the root handler.
 * would like to seperate for modular approach.
 */
let index = require("../controllers/index")
router.get("/", index.index)

module.exports = router
