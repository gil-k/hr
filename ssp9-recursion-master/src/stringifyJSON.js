// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
    // if (Array.isArray(obj)){
    //     console.log('          here is an Array');
    // }
    if (obj === null) {
        return 'null';
    }    
    if (obj === undefined || typeof obj === 'functions') {
        return;
    }

    if (typeof obj === 'string') {
            if (obj === 'foo'){
                console.log('                                           foo ' + obj.length);
            }        
        return '"' + obj + '"';
    }    
    if (typeof obj === 'number') {
        return obj.toString();
    }
    if (obj === true || obj === false) {
        return obj.toString();
    }


    var result = [];
    if (Array.isArray(obj)){
        for (var i = 0; i < obj.length; i++){
            var val = stringifyJSON(obj[i]);   
            result.push(val);
        }
        return '[' + result + ']';
    } else {
        result = [];
        for (var key in obj){
            if (typeof obj[key] === 'function'){
                return '{}';
            }
            var val = stringifyJSON(obj[key]);
            result.push('"' + key + '":' + val);
        }
        return '{' + result + '}';
    }
};
var stringifiableObjects = [
  9,
  null,
  true,
  false,
  'Hello world',
  [],
  [8],
  ['hi'],
  [8, 'hi'],
  [1, 0, -1, -0.3, 0.3, 1343.32, 3345, 0.00011999999999999999],
  [8, [[], 3, 4]],
  [[[['foo']]]],
  {},
  {'a': 'apple'},
  {'foo': true, 'bar': false, 'baz': null},
  {'boolean, true': true, 'boolean, false': false, 'null': null },
  // basic nesting
  {'a': {'b': 'c'}},
  {'a': ['b', 'c']},
  [{'a': 'b'}, {'c': 'd'}],
  {'a': [], 'c': {}, 'b': true}
];

stringifiableObjects.forEach(function(obj){
    console.log(stringifyJSON(obj));
})
// console.log(typeof null.toString() === 'string');
/*
{} -> '{' + f() + '}'
[] -> '[' + f() + ']'
key:value -> key/value
true/false -> 'true'/'false'
string -> string
number -> string
undefined, function(){}, Symbol('') -> null
x:undefined, x:Object, z:Symbol('') -> omit
Symbol('foo') -> 'foo'

*/