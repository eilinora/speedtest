<?php

$names = file_get_contents('js/names.txt');
$dataSet = file_get_contents('js/data.txt');

// echo $names;

//sum func
$ar = preg_split('/\n/', $names);
$len = count($ar);


//sum func
  //   i = 0, 
$sum = 0;
//, num = '', len_num = 0,
  // p = 0, loc = -1, sub = '', name = '', j = 0,  k = 0, numNext = false;

$data = preg_split('/ /', $dataSet);
$obj = array();
$s = null;
array_shift($data);
$dataLen = count($data);

for ($i = 0; $i < $dataLen; $i++) {
  $s = preg_split('/,/', $data[$i]);
  $d = preg_split('/\n/', $s[1]);
  if ( !isset($obj[$s[0]]) ) {
    $obj[$s[0]] = $d[0];
  } else {
    $obj[$s[0]] += +$d[0];
  }
}

// var_dump($obj);

for ($i = 0; $i < $len; $i++) {
  $n = $ar[$i];
  if ( !isset($nameCheck[$n]) ) {
    $nameCheck[$n] = true;
    if ( isset($obj[$n]) ) {
      $sum += $obj[$n];
    }
  }
}

echo $sum;

// console.log(sum);
