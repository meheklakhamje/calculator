let iclear = document.getElementById("iclear");
let iback = document.getElementById("iback");
let imod = document.getElementById("imod");
let idiv = document.getElementById("idiv");
let iplus = document.getElementById("iplus");
let isub = document.getElementById("isub");
let imul = document.getElementById("imul");
let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let num3 = document.getElementById("num3");
let num4 = document.getElementById("num4");
let num5 = document.getElementById("num5");
let num6 = document.getElementById("num6");
let num7 = document.getElementById("num7");
let num8 = document.getElementById("num8");
let num9 = document.getElementById("num9");
let num0 = document.getElementById("num0");
let num00 = document.getElementById("num00");
let iequal = document.getElementById("iequal");
let idot = document.getElementById("idot");

let result = document.getElementById("result");

num7.addEventListener("click", function () {
  result.innerHTML += "7";
});

num8.addEventListener("click", function () {
  result.innerHTML += "8";
});

num9.addEventListener("click", function () {
  result.innerHTML += "9";
});

num4.addEventListener("click", function () {
  result.innerHTML += "4";
});

num5.addEventListener("click", function () {
  result.innerHTML += "5";
});

num6.addEventListener("click", function () {
  result.innerHTML += "6";
});

num1.addEventListener("click", function () {
  result.innerHTML += "1";
});

num2.addEventListener("click", function () {
  result.innerHTML += "2";
});

num3.addEventListener("click", function () {
  result.innerHTML += "3";
});

num00.addEventListener("click", function () {
  result.innerHTML += "00";
});

num0.addEventListener("click", function () {
  result.innerHTML += "0";
});

idot.addEventListener("click", function () {
  result.innerHTML += ".";
});

idiv.addEventListener("click", function () {
  result.innerHTML += "/";
});

imul.addEventListener("click", function () {
  result.innerHTML += "*";
});

isub.addEventListener("click", function () {
  result.innerHTML += "-";
});

iplus.addEventListener("click", function () {
  result.innerHTML += "+";
});

imod.addEventListener("click", function () {
  result.innerHTML += "%";
});

iclear.addEventListener("click", function () {
  result.innerHTML = "";
});

iback.addEventListener("click", function () {
  result.innerHTML = result.innerHTML.slice(0, -1);
});


iequal.addEventListener("click", function () {
  result.innerHTML = eval(result.innerHTML);
});