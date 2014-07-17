(function () {

//443
//178853
//
//modules
var fs = require('fs');

//vars
var names = '',
    dataSet = '',
    nameCheck = {};

names = fs.readFileSync('js/names.txt', 'utf8');
dataSet = fs.readFileSync('js/data.txt', 'utf8');

// var split = function (needle, haystack) {
//   var i = 0, len = haystack.length, word = '', ar = [], chr = '';
//   for (i = 0; i < len; i++) {
//     chr = haystack[i];
//     if (chr === needle) {
//       ar.push(word);
//       word = '';
//     } else {
//       word += chr;
//     }
//   }
//   ar.push(word);
//   return ar;
// };


//sum func
var ar = names.split('\n'), //split ('\n', names), //
    len = ar.length, n = '',
    i = 0, sum = 0, num = '',
    data = dataSet.split(' '), obj = [], s = null, dataLen = 0;

data.shift();
dataLen = data.length;

//build obj array
for (i = 0; i < dataLen; i++) {
  s = data[i].split(',');
  d = s[1].split('\n');

  if (obj[s[0]] === undefined) {
    obj[s[0]] = +d[0];
  } else {
    //sub common names
    obj[s[0]] += +d[0];
  }
}

//cycle through obj list
for (i = 0; i < len; i++) {
  n = ar[i];
  if (nameCheck[n] === undefined) {
    nameCheck[n] = true;
    if (obj[n] !== undefined) {
      sum += obj[n];
    }
  }
}

console.log(sum);


})();