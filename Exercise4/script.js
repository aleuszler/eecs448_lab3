function changecolors() {
var border = document.getElementById("thickness").value;
var redbordercolor = document.getElementById("bredinput").value;
var greenbordercolor = document.getElementById("bgreeninput").value;
var bluebordercolor = document.getElementById("bblueinput").value;

var redbodycolor = document.getElementById("redinput").value;
var greenbodycolor = document.getElementById("greeninput").value;
var bluebodycolor = document.getElementById("blueinput").value;

console.log(redbordercolor);
console.log(greenbordercolor);
console.log(bluebordercolor);


  document.body.style.backgroundColor= 'rgb(' + redbodycolor + ',' + greenbodycolor + ',' + bluebodycolor + ')';

  document.getElementById("intro").style.borderWidth=border+'px';

  document.getElementById("intro").style.borderColor= 'rgb(' + redbordercolor + ',' + greenbordercolor + ',' + bluebordercolor + ')';

  console.log(redbordercolor);
  console.log(greenbordercolor);
  console.log(bluebordercolor);
}
