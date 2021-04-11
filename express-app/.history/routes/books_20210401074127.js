const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// An array of JSON objects with values.
const crudApp = () => {
  this.myBooks = [
    { _: '0', Book_Name: 'A Children’s Bible', Author: 'Lydia Millet', Collection: 'A Children’s Bible', Release: '2020' },
    { ID: '1', Book_Name: 'Deacon King Kong', Author: 'James McBride', Collection: 'Deacon King Kong', Release: '2020' },
    { ID: '2', Book_Name: 'Hamnet', Author: 'Maggie O’Farrell', Collection: 'Hamnet', Release: '2020' },
    { ID: '3', Book_Name: 'Homeland Elegies', Author: 'Ayad Akhtar', Collection: 'Homeland Elegies', Release: '2020' },
    { ID: '4', Book_Name: 'The Vanishing Half', Author: 'Brit Bennett', Collection: 'The Vanishing Half', Release: '2020' },
    { ID: '5', Book_Name: 'Hidden Valley Road', Author: 'Robert Kolker', Collection: 'Hidden Valley Road', Release: '2020' }
  ]

  this.author = ['Lydia Millet', 'James McBride', 'Maggie O’Farrell', 'Ayad Akhtar', 'Brit Bennett', 'Robert Kolker'];
  this.col = [];
  this.createTable = () => {
    for (let i = 0; i < this.myBooks.length; i++) {
      for (let key in this.myBooks[i]) {
        if (this.col.indexOf(key) === -1) {
          this.col.push(key);
        }
      }
    }

  }
}

module.exports = router;

crudApp();

//export default crudApp;

