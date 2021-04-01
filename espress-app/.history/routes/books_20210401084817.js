const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// An array of JSON objects with values.
/*const crudApp = () => {
  this.myBooks = [
    { id: '0', name: 'A Children’s Bible', author: 'Lydia Millet', collection: 'A Children’s Bible', release: '2020' },
    { id: '1', name: 'Deacon King Kong', author: 'James McBride', collection: 'Deacon King Kong', release: '2020' },
    { id: '2', name: 'Hamnet', author: 'Maggie O’Farrell', collection: 'Hamnet', release: '2020' },
    { id: '3', name: 'Homeland Elegies', author: 'Ayad Akhtar', collection: 'Homeland Elegies', release: '2020' },
    { id: '4', name: 'The Vanishing Half', author: 'Brit Bennett', collection: 'The Vanishing Half', release: '2020' },
    { id: '5', name: 'Hidden Valley Road', author: 'Robert Kolker', collection: 'Hidden Valley Road', release: '2020' }
  ]
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

  ///
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

crudApp.FetchAll();
module.exports = crudApp;
*/


//export default crudApp;

var app = new function() {

  this.el = document.getElementById('countries');

  this.countries = ['France', 'Germany', 'England', 'Spain', 'Belgium', 'Italy', 'Portugal', 'Irland', 'Luxembourg'];

  this.Count = function(data) {
    var el   = document.getElementById('counter');
    var name = 'country';

    if (data) {
      if (data > 1) {
        name = 'countries';
      }
      el.innerHTML = data + ' ' + name ;
    } else {
      el.innerHTML = 'No ' + name;
    }
  };
  
  this.FetchAll = function() {
    var data = '';

    if (this.countries.length > 0) {
      for (i = 0; i < this.countries.length; i++) {
        data += '<tr>';
        data += '<td>' + this.countries[i] + '</td>';
        data += '<td><button onclick="app.Edit(' + i + ')">Edit</button></td>';
        data += '<td><button onclick="app.Delete(' + i + ')">Delete</button></td>';
        data += '</tr>';
      }
    }

    this.Count(this.countries.length);
    return this.el.innerHTML = data;
  };

  this.Add = function () {
    el = document.getElementById('add-name');
    // Get the value
    var country = el.value;

    if (country) {
      // Add the new value
      this.countries.push(country.trim());
      // Reset input value
      el.value = '';
      // Dislay the new list
      this.FetchAll();
    }
  };

  this.Edit = function (item) {
    var el = document.getElementById('edit-name');
    // Display value in the field
    el.value = this.countries[item];
    // Display fields
    document.getElementById('spoiler').style.display = 'block';
    self = this;

    document.getElementById('saveEdit').onsubmit = function() {
      // Get value
      var country = el.value;

      if (country) {
        // Edit value
        self.countries.splice(item, 1, country.trim());
        // Display the new list
        self.FetchAll();
        // Hide fields
        CloseInput();
      }
    }
  };

  this.Delete = function (item) {
    // Delete the current row
    this.countries.splice(item, 1);
    // Display the new list
    this.FetchAll();
  };
  
}

app.FetchAll();

function CloseInput() {
  document.getElementById('spoiler').style.display = 'none';
}
</script>