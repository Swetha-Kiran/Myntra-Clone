
//form js

var login = document.getElementById("LoginForm");
var register = document.getElementById("RegForm");
var indicator = document.getElementById("Indicator");


document.getElementById("login-id").addEventListener("click",()=>{
  register.style.transform = "translateX(300px)";
  login.style.transform = "translateX(300px)";
  indicator.style.transform = "translateX(0px)";
});
document.getElementById("register-id").addEventListener("click",()=>{
  register.style.transform = "translateX(0px)";
  login.style.transform = "translateX(0px)";
  indicator.style.transform = "translateX(100px)";
});

