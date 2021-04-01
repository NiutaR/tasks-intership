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
    { ID: '1', Book_Name: 'Deacon King Kong', Author: 'James McBride', Collection: 'Deacon King Kong', Release: '2020' },
    { ID: '2', Book_Name: 'Hamnet', Author: 'Lydia Millet', Collection: 'A Children’s Bible', Release: '2020' },
    { ID: '3', Book_Name: 'A Children’s Bible', Author: 'Lydia Millet', Collection: 'A Children’s Bible', Release: '2020' },
    { ID: '4', Book_Name: 'A Children’s Bible', Author: 'Lydia Millet', Collection: 'A Children’s Bible', Release: '2020' },
    { ID: '5', Book_Name: 'A Children’s Bible', Author: 'Lydia Millet', Collection: 'A Children’s Bible', Release: '2020' }
  ]
}

module.exports = router;
