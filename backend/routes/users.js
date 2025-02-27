var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get("/", (req, res) => {
  res.json({ message: "API is working!" });
});

module.exports = router;
