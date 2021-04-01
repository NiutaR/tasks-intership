const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// An array of JSON objects with values.
const crudApp = () => {
  this.myBooks = [
    { ID: '0', Book_Name: 'A Children’s Bible', Author: 'Lydia Millet', Price: 125.60 },
    { ID: '1', Book_Name: 'Asp.Net 4 Blue Book', Category: 'Programming', Price: 56.00 },
    { ID: '2', Book_Name: 'Popular Science', Category: 'Science', Price: 210.40 },
    { ID: '3', Book_Name: 'Computer Architecture', Category: 'Computers', Price: 125.60 },
    { ID: '4', Book_Name: 'Asp.Net 4 Blue Book', Category: 'Programming', Price: 56.00 },
    { ID: '4', Book_Name: 'Popular Science', Category: 'Science', Price: 210.40 }
  ]
}

module.exports = router;
