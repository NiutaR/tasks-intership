//write a JavaScript function that returns the function name
function showMyName(name) {
    return arguments.callee.name;
    
}
console.group('function name');
console.log(showMyName());
console.groupEnd();
// использую метод constructor 

function showFunctionName() {
    console.log(this.constructor.name);
}
let s = new showFunctionName();
//console.log(s.constructor.name);
//console.log(showFunctionName.prototype.constructor.name);


//write a function that recieves a random nr of string arguments 
//and returns a story generated with the help of these arguments and other custom text
function randomNumber(...args) {
    return args.reduce((acc, cur) => acc + cur);
}
console.log('ordinary function', randomNumber('a', 'bc', 'dfg', 'random', 'string'));
//Extend the default values functionality (for function parameters) to set to default not only the undefined values
// but also the null values (but not other falsy values)
/*function defaultValues({ name } = {}) {
    return name;
}
defaultValues();
console.log(defaultValues());
*/

function getDefaultValues(param1, param2) {
    
        param1 = '';
        return param1 || param2;
    
        param3 = param1 ?? 'magic';
    
}
console.log(getDefaultValues('hihihih'));


// Write a function that behaves differently depending on the nr of arguments being passed

/*function optionsTest(...args) {
  const stringValue = args.stringValue || "string default value";
  const boolValue = !!opts.boolValue; // coerces value to boolean with a double negation pattern
  const numericValue = opts.numericValue === undefined ? 123 : opts.numericValue;

  return "{x:" + x + ", y:" + y + ", stringValue:'" + stringValue + "', boolValue:" + boolValue + ", numericValue:" + numericValue + "}";

}
console.log(optionsTest(2, 'jdskfdsf', 78));
*/
