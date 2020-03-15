var index=1;
cycleforward(index);

function indexfinder(x)
{
  cycleforward(index+=x);
}
function cycleforward(n) {
var picarray=document.getElementsByClassName("slides");

if(n>picarray.length)
{
  index=1;
}
if(n<1)
{
  index=picarray.length;
}
for(var i=0;i<picarray.length;i++)
{
  picarray[i].style.display="none";
}
picarray[index-1].style.display="inline";
}
