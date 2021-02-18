const starWarsApiUrl = 'https://swapi.dev/api/people';

const getStarWarsPeople = (cb) => {
  fetch(starWarsApiUrl)
  .then(res => res.json())
  .then(cb);
}

getStarWarsPeople((res) => { 
  console.dir(res);
  document.querySelector('p#info').innerHTML = `The number of people found ${res.count}. The first one from the list${res.results[0].name}}`;
  console.log('The number of people found ' + (res.count));
  console.log('The first one from the list' + ' ' + (res.results[0].name));
});

