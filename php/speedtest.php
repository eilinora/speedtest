<?php

$names = file_get_contents('js/names.txt');
$dataSet = file_get_contents('js/data.txt');

echo $names;

//sum func
$ar = split( $names, '\n');
$len = count($ar);
$result = null;
// $i = 0, rex, sum = 0;

do {
// for ($i = 0; $i < len; i++) {
  $rex = new RegExp( ar[i] + ',(.*)', 'gi');
  $result = rex.exec(dataSet);
  if (result) {
    sum += +result[1];
  }
} while ($i < $len);

echo $sum;
