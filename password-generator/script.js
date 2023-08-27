"use strict";

const countdigtext = document.getElementById("countdigtext");
const uppercase = document.querySelector("#uppercase");
const numbers = document.querySelector("#numbers");
const specialcharacters = document.querySelector("#specialchar");
const valueslider = document.getElementById("digits");
const textfield = document.getElementById("textfield");

const uppercaseEl = document.getElementById("uppercase");
const numbersEl = document.getElementById("numbers");
const specialcharEl = document.getElementById("specialchar");

const uppercasearray = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
const lowercasearray = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const numberarray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const specialcharactersarray = ["?", "@", "[", "#", "$", "%", "*", "(", ")"];

function getuppercase() {
  let rand = Math.trunc(Math.random() * 26) + 1;
  return uppercasearray[rand];
}
function getlowercase() {
  let rand = Math.trunc(Math.random() * 26) + 1;
  return lowercasearray[rand];
}
function getspecial() {
  let rand = Math.trunc(Math.random() * 9) + 1;
  return specialcharactersarray[rand];
}
function getnumber() {
  let rand = Math.trunc(Math.random() * 9) + 1;
  console.log(rand);
  return String.fromCharCode(48 + numberarray[rand]);
}

function update() {
  let data = valueslider.value;
  countdigtext.innerText = data;
  console.log(uppercaseEl.value);

  let passwordarray = [];
  let temp = data;
  while (temp) {
    if (uppercaseEl.checked) {
      passwordarray.push(getuppercase());
      temp--;
    }
    if (!temp) break;
    passwordarray.push(getlowercase());
    temp--;
    if (specialcharEl.checked){
      if (!temp) break;
      passwordarray.push(getspecial());
      temp--;
    }
    if (numbersEl.checked) {
      if (!temp) break;
      passwordarray.push(getnumber());
      temp--;
    }
  }
  textfield.value = passwordarray.join("");
}
