"use strict";
var myName = "Mark";
//template string:행에 걸쳐있거나,표현식을 넣을 수 있는 문자열
// `${변수이름}` 따옴표아님 빽틱임
var fullname = 'Mark Lee';
var age = 39;
var sentence = "hello, My name is " + fullname + ".\nI'll be " + (age + 1) + " years old next month.";
console.log(sentence);
