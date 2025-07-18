const express = require('express');
const router = express.Router();
const { getRoleList } = require('../logic/roleEngine');

router.get('/roles', (req, res) => {
  res.json(getRoleList());
});

module.exports = router;