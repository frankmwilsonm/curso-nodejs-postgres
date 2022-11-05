const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {

  res.send("hi mi name is ff");
  // res.json([]);
});

module.exports = router;
