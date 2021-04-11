const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// An array of JSON objects with values.
const crudApp = () => {
  this.myBooks = [
    { ID: '0', Book_Name: 'A Children’s Bible', Author: 'Lydia Millet', Collection: 'A Children’s Bible', Release: '2020' },
  : 'Popular Science', Category: 'Science', Price: 210.40 }
  ]
}

module.exports = router;
