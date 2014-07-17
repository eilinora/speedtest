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

names = fs.readFileSync('js/names.txt', 'utf8');//.toString();
dataSet = fs.readFileSync('js/data.txt', 'utf8');//.toString();

var split = function (needle, haystack) {
  var i = 0, len = haystack.length, word = '', ar = [], chr = '';
  for (i = 0; i < len; i++) {
    chr = haystack[i];
    // console.log(chr, needle);
    if (chr === needle) {
      ar.push(word);
      word = '';
    } else {
      word += chr;
    }
  }
  ar.push(word);
  return ar;
};


//sum func
var dataloaded = function () {
  var ar = names.split('\n'), //split ('\n', names), //
      len = ar.length, n = '',
      i = 0, sum = 0, num = '', len_num = 0,
      p = 0, loc = -1, sub = '', name = '', j = 0,  k = 0, numNext = false;
  // console.log(ar);
  for (i = 0; i < len; i++) {
    p = dataSet;
    n = ar[i];

    // console.log('NAME: ', n);
    //double check
    if (nameCheck[n] === undefined) {
      nameCheck[n] = true;
      name = n+',';
      
      loc = p.indexOf(name);

      if (loc !== -1) {
        num = 0;
        //grab num
        for (j = 0; j < 400; j++) { //do {
          len_num = loc+20;
          // sub = p.substring(loc, loc+20);
          for (k = loc; k < len_num; k++) {
            c = p.charAt(k);
            if (c === ',') {
              num = +p.charAt(k+1);
              break;
            }
          }

          // num = sub.substring(sub.indexOf(',')+1, sub.indexOf('\n'));
          // console.log(p.substring(loc - 8, loc + 15));
          // console.log('NUM: '+num);
          sum += num;
          // console.log(sum);

          p = p.substring(k, p.length);

          loc = p.indexOf(name);
          if (loc === -1) {
            // console.log(name, j);
            break;
          }
          // console.log('----');
        }// while (loc !== -1);

        // console.log('----------------------------------------');
      }
    }
  }
  // console.log(i);
  console.log(sum);
  // console.log(sum - 178853);

};

dataloaded();

})();



  //   dataSet.indexOf(ar[i]);
  //   // rex = new RegExp( ar[i] + ',(.*)', 'g');
  //   // while ((result = rex.exec(dataSet)) !== null)
  //   // {

  //   //   sum += Number(result[1]);

  //   //   // console.log(result[0], result[1], result['index'], ' ---- sum: ' + sum);
  //   //   // console.log(ar[i] + ',(.*)', result);
  //   // }