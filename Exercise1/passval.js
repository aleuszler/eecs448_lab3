function validate () {
var pass1 = document.getElementById("password");
var pass2 = document.getElementById("passwordvalidate");

if(pass1.value==pass2.value)
{
  alert("Passwords match");
}
else
{
  alert("Passwords do not match");
}
if(pass1.value.length<8)
{
  alert("Password needs to be at least 8 characters");
}
}
