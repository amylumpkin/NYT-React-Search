const router = require("express").Router();
const articlesController = require("../controllers/articlesController")

// match with api route declared in server
router.route("/")
  .get(articlesController.findAll) // get all articles
  .post(articlesController.create) // create an article

router.route("/:id")
  .get(articlesController.findById) // get by id
  .put(articlesController.update) // update by id
  .delete(articlesController.delete) // delete by id

module.exports = router;