//		function findMax(arrayOfNumbers)
//	Gasiti cel mai mare nr dintr-un masiv M de numere
//		function findMin(arrayOfNumbers)
//	Gasiti cel mai mic nr dintr-un masiv M de numere
/*Вариант 1
const arr = [1,4,8,10,5,98];
console.log(Math.max(...arr));самый простой способ поиска макс числа , через функцию Math.max()
*/

/*Вариант 2
const arr = [100, 0, 10, 40];
function findMax(arrayOfNumbers) {
    return Math.max.apply(null, arrayOfNumbers);
}

console.log(findMax(arr)); // использовала метод apply (не подходит если будут использоваться много элементов в массиве)
Вариант 3 Использую метод reduce , чтобы узнать min and max 

const array = [2828, 999, 827, 82, 92827,373636, 278, 2282, 282, 2, 939, 111, 8382, 238];
function findMax(arrayOfNumbers) {
  return arrayOfNumbers.reduce(function(a, b) {
    return Math.max(a, b);
  });
}
console.log(findMax(array));
function findMin(arrayOfNumbers) {
  return arrayOfNumbers.reduce(function(a, b) {
    return Math.min(a, b);
  });
}
console.log(findMin(array));
Вариант 4 (простой)
let arr = [];
arr.min()
arr.max()
/*

* 		function displayDate(day, month, year); // 1, 1, 2021 => 01.01.21, 10, 10, 2021 => 10.10.21
	Transformați data transmisă astfel incit fiecare poziție sa aibă 2 cifre.
*/
/*const date = Date.now();
const formatedDate = dayjs(date).format("DD-MM-YY")
console.log(formatedDate);

let d = new Date();
let datestring = ("0" + d.getDate()).slice(-2) + "-" + ("0"+(d.getMonth()+1)).slice(-2) + "-" +
    d.getFullYear() + " " + ("0" + d.getHours()).slice(-2) + ":" + ("0" + d.getMinutes()).slice(-2);
console.log(new Date());

const date = new Date('1, 1, 2021')
const dateTimeFormat = new Intl.DateTimeFormat('en', { year: '2-digit', month: '2-digit', day: '2-digit' }) 
const [{ value: month },,{ value: day },,{ value: year }] = dateTimeFormat .formatToParts(date ) 

console.log(`${day}.${month}.${year }`) //извлеrkf компоненты даты (или времени) из объекта DateTimeFormat (который является частью объекта ECMAScript Internationalization API), а затем вручную создала строку с нужными разделителями.


const date = new Date();
function formatedDate(day, month, year) {
  let dateTimeFormat = new Intl.DateTimeFormat('en', {year: '2-digit', month: '2-digit', day: '2-digit'});
  return [{ value: month },,{ value: day },,{ value: year }] = dateTimeFormat .formatToParts(date ) ;
}
console.log(new Date(1,1,3031));
*/

function displayDate(day, month, year) {
  const d = new Date('10,10,2021');
  const ye = new Intl.DateTimeFormat('en', { year: '2-digit' }).format(d);
  const mo = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(d);
  const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);
  console.log(`${da}.${mo}.${ye}`);
}
displayDate();


/*
* 		function isPalindrom(string);
	Verificați dacă un cuvint/fraza este palindrom (se citește invers la fel ca în original).
  function isPalindrom(str) {
*/
isPalindrom('racecar');
isPalindrom('table');
isPalindrom('Anna');
isPalindrom('David');
isPalindrom('Niagara o roar again');

function isPalindrom(str) {
  str = str.toLowerCase().replace(/\s/g,'');// приводим к нижнему регистру и заменяем все пробельные символы на безпробельные символы
  return str === str.split('').reverse().join('');
 
}

///решение через цикл 
function isPalindrom(str) {
  const len = Math.floor(str.lenght / 2);
  for (let i = 0; i < len; i++)
  if (str[i] !== str[str.lenght - i - 1]) {
    return false;
  }
  return true;
}
console.log(isPalindrom('Anna'));



/*

* 		function isInteger(x)
	Verificați dacă parametrul transmis către funcție este un număr întreg.
*/
function isInteger(x) {
  if (Number.isInteger(x)) {
    return 'Right';
  }
  return 'You are not right';  
}
console.log(isInteger(10));

/*
* 		function isFloat(x)
	Verificați dacă parametrul transmis către funcție este un număr real (cu numere după virgula).
*/
function isFloat(x) {
  return parseFloat(x) * 2.0 * Math.PI;
}
console.log(isFloat(1.2));
/*
* 		function convertToRomanNumber(x);
	Transformati un număr X întreg în echivalentul scris cu numerale romane.
*/
const romanMatrix = [
  [1000, 'M'],
  [900, 'CM'],
  [500, 'D'],
  [400, 'CD'],
  [100, 'C'],
  [90, 'XC'],
  [50, 'L'],
  [40, 'XL'],
  [10, 'X'],
  [9, 'IX'],
  [5, 'V'],
  [4, 'IV'],
  [1, 'I']
];
function convertToRomanNumber(x) {
  if (x === 0) {
    return '';
  }
  for (let i = 0; i < romanMatrix.length; i++) {
    if (x >= romanMatrix[i][0]) {
      return romanMatrix[i][1] + convertToRomanNumber(x - romanMatrix[i][0]);
    }
  }
}
console.log(convertToRomanNumber(10));
