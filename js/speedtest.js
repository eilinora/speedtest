(function () {

//443
//178853

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
  return ar;
};


//sum func
var dataloaded = function () {
  var ar = names.split('\n'), //split ('\n', names), //
      len = ar.length,
      i = 0, sum = 0,
      p = 0, loc = -1, sub = '', name = '', j = 0;
  // console.log(ar);
  while (i < len) {
    p = dataSet;

    //double check
    if (nameCheck[ar[i]] === undefined) {
      nameCheck[ar[i]] = true;
      name = ar[i]+',';

      // console.log(p);
      loc = p.indexOf(name);

      while (loc !== -1) {

        sub = p.slice(loc, loc+20);

        end = sub.split('\n')[0];

        num = end.slice(end.indexOf(',')+1, end.length);
        // console.log(num);
        sum += parseInt(num, 10);

        p = p.slice(loc + 1, p.length);

        loc = p.indexOf(name);
        // if (loc === -1) {
        //   // console.log(name, j);
        //   break;
        // }
        // console.log('----------------------------------------', loc);
      }


    }

    i += 1;
  }

  console.log(sum);

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