var picarray=[];
var i=0;
function cycleforward() {
var pic1 = document.getElementById('1');
var pic2 = document.getElementById('2');
var pic3 = document.getElementById('3');
var pic4 = document.getElementById('4');
var pic5 = document.getElementById('5');
var pic6 = document.getElementById('6');

picarray.push(pic1);
picarray.push(pic2);
picarray.push(pic3);
picarray.push(pic4);
picarray.push(pic5);
picarray.push(pic6);
console.log(picarray);

i=i+1;
picarray[i-1].style.display="block";
}

function cyclebackward(start) {







