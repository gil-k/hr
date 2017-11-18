// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
    if (obj === null) {
        return 'null';
    }    
    if (obj === undefined || typeof obj === 'functions') {
        return;
    }

    if (typeof obj === 'string') {     
        return '"' + obj + '"';
    }    
    if (typeof obj === 'number' || obj === true || obj === false) {
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

console.log(stringifyJSON([8, 'hi'],));