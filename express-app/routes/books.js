const express = require('express');
const router = express.Router();
const app = express();

const books = require('../database/booksApi');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// An array of JSON objects with values.
/*const crudApp = () => {
  
  this.el = document.getElementById('#author');
  this.author = ['Lydia Millet', 'James McBride', 'Maggie O’Farrell', 'Ayad Akhtar', 'Brit Bennett', 'Robert Kolker'];
  /*this.col = [];
  this.createTable = () => {
    for (let i = 0; i < this.myBooks.length; i++) {
      for (let key in this.myBooks[i]) {
        if (this.col.indexOf(key) === -1) {
          this.col.push(key);
        }
      }
    }

  }
  this.Count = (data) => {
    const el = document.getElementById('counter');
    const name = 'name';
    if (data) {
      if(data > 1) {
        name = 'name';
      }
      el.innerHTML = data + '' + name;
    } else {
      el.innerHTML = 'No' + name;
    }
  };
  this.FetchAll = () => {
    const data = '';
    if (this.author.length > 0) {
      for (i = 0; i < this.author.length; i++) {
        data += '<tr>';
        data += '<td>' + this.author[i] + '</td>';
        data += '</tr>';
      }
    }
    this.Count(this.author.length);
    return this.el.innerHTML = data;
  };
}

crudApp.F();
*/
module.exports = app;


//export default crudApp;

