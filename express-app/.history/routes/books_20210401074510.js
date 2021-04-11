const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// An array of JSON objects with values.
const crudApp = () => {
  this.myBooks = [
    { id: '0', name: 'A Children’s Bible', author: 'Lydia Millet', Collection: 'A Children’s Bible', Release: '2020' },
    { id: '1', name: 'Deacon King Kong', author: 'James McBride', Collection: 'Deacon King Kong', Release: '2020' },
    { id: '2', name: 'Hamnet', author: 'Maggie O’Farrell', Collection: 'Hamnet', Release: '2020' },
    { id: '3', name: 'Homeland Elegies', Author: 'Ayad Akhtar', Collection: 'Homeland Elegies', Release: '2020' },
    { id: '4', name: 'The Vanishing Half', Author: 'Brit Bennett', Collection: 'The Vanishing Half', Release: '2020' },
    { id: '5', name: 'Hidden Valley Road', Author: 'Robert Kolker', Collection: 'Hidden Valley Road', Release: '2020' }
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

