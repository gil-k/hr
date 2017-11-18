// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  if (json === ''){
    return '';
  }
  if (json === undefined){
    console.log('is undefined')
    return;
  }
  if (json === 'null'){
    console.log('is null')
    return null;
  }
  if (json.length > 0 && json[0] === ' ' || json[json.length - 1] === ' ') {
    json = json.trim();
  }  
  if (json === 'true'){
    return true;
  }
  if (json === 'false'){
    return false;
  }
  if (json[0] === '"' && json[json.length - 1] === '"'){
    var param = json.slice(1, json.length - 1);
    // console.log('quoted=' + param);
    if (json.includes('\\')) {
      console.log('here');
      throw new SyntaxError();
    }
    return parseJSON(param);
  }
  if (json[0] === '[' || json[json.length - 1] === ']') {
    if (json[0] === '[' && json[json.length - 1] === ']'){
      var result = [];
      var param = json.slice(1, json.length - 1);
      
      if (param.length > 0){
        param = param.split(',');
        for (var i = 0; i < param.length; i++) {
          // console.log(param);
          result.push(parseJSON(param[i]));
        }
      }
      return result;
    } else {
      throw new SyntaxError();
    }
  }

  if (json[0] === '{' && json[json.length - 1] === '}'){
    var result = {};
    var param = json.slice(1, json.length - 1);

    
    while (param.length > 0){
    // for (var i = 0; i < 3; i++){
      var indexOfColon = param.indexOf(':');
      var key = param.slice(0, indexOfColon);
      key = key.trim();
      // console.log('1 ' + param + ', index=' + indexOfColon + ' key=' + key);
      // console.log(param.slice(0, indexOfColon + 1));
      param = param.slice((indexOfColon + 1));
      // param = param.trim();
      // console.log(param);

      var value;
      var indexOfComma = param.indexOf(',');
      if (indexOfComma >= 0){
        value = param.slice(0, indexOfComma);
        param = param.slice(indexOfComma + 1);
        param = param.trim();
      } else {
        value = param;
        param = '';
      }
      value = value.trim();
      // console.log('2 ' + param + ', index=' + indexOfComma + ' value=' + value);      
      // console.log('param=' + param + ' length=' + param.length);
      result[parseJSON(key)] = parseJSON(value);      
    }
    return result;
  }
  if (typeof json === 'string'){
    if (!isNaN(json)){
      return Number(json);
    }
    // json = json.trim();
    // console.log('isstring, length=', json.length + ': ' + json);
    return json;
  }
};
// console.log( parseJSON('{"abc": "defg", "hijkl": "mno"}') );

parseableStrings = [
  // basic stuff
  // '[]',
  // '{}',  
  // '{"foo": ""}',
  // '{"foo": "bar"}',
  // '["one", "two"]',
  // '{"a": "b", "c": "d"}',
  // '[null,false,true]'
  // '{"foo": true, "bar": false, "baz": null}',
  // '[1, 0, -1, -0.3, 0.3, 1343.32, 3345, 0.00011999999999999999]'
  '{"boolean, true": true, "boolean, false": false, "true": true }'
  ]
// var jsonObj = parseJSON(parseableStrings[0]);
// console.log(jsonObj);
// // console.log(jsonObj === {'foo': ''});
// console.log(JSON.stringify(jsonObj));

// for (var i = 0; i < parseableStrings.length; i++){
//     var jsonObj = parseJSON(parseableStrings[i]);
//     console.log(JSON.stringify(jsonObj));
// }  





