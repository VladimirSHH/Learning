/* let x, y, z;
x = 6;
y = 15;
z = 4;

x += y - x++ * z;
console.log(x); //-3

z = --x - y * 5;
console.log(z); //-70

y /= x + (5 % z);
console.log(y); //2.1428...

z = x++ + y * 5;
console.log(z); //81

x = y - x++ * z;
console.log(x); //-9 */

/* let a = prompt("Введите первое число"," ");
let b = prompt("Введите второе число"," ");
let c = prompt("Введите третье число"," ");

let res = (+a + +b + +c) / 3;

alert(`Среднее арифм. = ${res}`); */

/* let r = prompt("Введите радиус цилиндра", "");
let h = prompt("Введите высоту цилиндра", "");

let Volume = Math.PI * +r * +r * +h;

alert(`Обьем цилиндра при радиусе: ${r} и высоте: ${h} = ${Volume}`);

let Square = 2 * Math.PI * +r * (+r + +h);

alert(`Площадь цилиндра при радиусе: ${r} и высоте: ${h} = ${Square}`);
 */
/* 
var a = Number(prompt("Введите первое число", ""));

var b = Number(prompt("Введите второе число, больше первого", ""));

console.log(`Первое число ${a} Второе число ${b}`);
if (a < b) {
  for (let index = 1; index < b - 1; index++) {
    console.log(++a);
    if (a % 2 != 0) {
      console.log(`Непарное: ${a}`);
    }
  }
} else {
  alert("Вы ввели неправильное значение!");
}
 */

/* var a = Number(prompt("Введите число", ""));
var result = 1;
do {
    result *= a--;
} 
while (a != 1);
  
console.log(result); */

/* var horizCount = 10; // определяем сколько символов будет занимать по горизонтали
var vertCount = 5; // определяем сколько символов будет занимать по горизонтали
var star = "*";
var whitespace = " ";

for (var i = 0; i < vertCount; ++i) {
  var str = "";
  if (i == 0 || i == vertCount - 1) {
    for (var j = 0; j < horizCount; ++j) {
      str += star;
    }
  } else {
    str = star;
    for (var j = 0; j < horizCount - 2; ++j) {
      str += whitespace;
    }
    str += star;
  }
  console.log(str);
}
 */

/* for (var h = 0; h < 8; h++) {
    for (var w = 0; w < h + 1; w++) {
      document.write("*\n");
    }
    document.write("<br>");
  }
  document.write("<hr>"); */

/* var line = 8;
var space = 7;
var star = 1;

for (var h = 0; h < line; h++) {
  for (var wsp = 0; wsp < space; wsp++) {
    document.write("&nbsp\n");
  }
  for (var wst = 0; wst < star; wst++) {
    document.write("*");
  }
  space -= 1;
  star += 2;
  document.write("<br>");
}
 */

/* var space = 18;
var star = 1;
var line = 20;
for (var i = 0; i <= line; i++){
    for (var j = 0; j <= space; j++){
        document.write("&nbsp")
    }
    for (var k = 0; k < star; k++){
        document.write("*")
    }
    space--;
    star++;
    if (i >= line / 2 && i <= line){
        star = star - 2;
        space = space + 2;
    }
    document.write("<br>");
} */
/* 
var array = [];

for (let index = 0; index < 6; index++) {
    array[index] = Number(prompt("Заполните массив числами",""));
}

console.log(array);
document.write("Ваш массив:" + array);
document.write("<br>");

var max = Number.MIN_VALUE;
var min = Number.MAX_VALUE;
var sum = 0;
var average;

for (let index = 0; index < array.length; index++) {
    if (array[index] < min) {
        min = array[index];
    }
    if (array[index] > max) {
        max = array[index];
    }
    sum+=array[index];
}
average = sum/array.length;

document.write("Максимальное значение массива: " + max);
document.write("<br>");
document.write("Минимальное значение массива: " + min);
document.write("<br>");
document.write("Сумма всех элементов массива: " + sum);
document.write("<br>");
document.write("Среднее арифметическое массива: " + average);
document.write("<br>"); */

/* const SIZE = 5;

var array = [[], [], [], [], []];

for (let i = 0; i < SIZE; i++) {
  for (let j = 0; j < SIZE; j++) {
    array[i][j] = Number(prompt("Заполните двумерный массив", ""));
  }
}

document.write("Ваш массив");
document.write("<br>");

for (let i = 0; i < SIZE; i++) {
  for (let j = 0; j < SIZE; j++) {
    document.write(array[i][j] + " ");
  }
  document.write("<br>");
}

for (let i = 0; i < SIZE; i++) {
  for (let j = 0; j < SIZE; j++) {
    if (array[i][i] < 0) {
      array[i][i] = 0;
    } else if (array[i][i] > 0) {
      array[i][i] = 1;
    }
  }
}

document.write("Ваш массив c измененной главной диагональю");
document.write("<br>");

for (let i = 0; i < SIZE; i++) {
  for (let j = 0; j < SIZE; j++) {
    document.write(array[i][j] + " ");
  }
  document.write("<br>");
} */
/* 
function Add(firstvalue, secondvalue) {
  console.log(firstvalue + secondvalue);
}
function Sub(firstvalue, secondvalue) {
  console.log(firstvalue - secondvalue);
}
function Mul(firstvalue, secondvalue) {
  console.log(firstvalue * secondvalue);
}
function Div(firstvalue, secondvalue) {
  if (secondvalue != 0) {
    console.log(firstvalue / secondvalue);
  }
}

var a, b;
a = Number(prompt("Введите первое значение"), "");
b = Number(prompt("Введите второе значение"), "");
console.log(Add(a, b));

var key = Number(
  prompt(
    "Выберите действие: 1 - сложить 2 - отнять 3 - умножить 4 - разделить",
    ""
  ),
  ""
);

switch (key) {
  case 1:
    Add(a, b);
    break;
  case 2:
    Sub(a, b);

    break;
  case 3:
    Mul(a, b);
    break;
  case 4:
    Div(a, b);
    break;

  default:
    alert("Вы сделали что-то не то. Попробуйте еще раз");
    break;
} */

function FOO(value) {
    document.write("Ваше число: " + value);
    document.write("<br>");
  if (value < 0) {
    document.write("Ваше число отрицательное!");
    document.write("<br>");
  } else {
    document.write("Ваше число положительное!");
    document.write("<br>");
  }

  let flag = true;
  for (let i = 2; i < value; i++) {
    if (value % i == 0) {
      flag = false;
      break;
    }
  }
  document.write("Простое ли ваше число?: " + flag);
  document.write("<br>");

  
    if (value % 2 == 0 || value % 5 == 0 || value % 3 == 0 || value % 6 == 0 ||value % 9 == 0) {
        document.write("Ваше число делится на 2 или 5 или 3 или 6 или 9 без остатка");
        document.write("<br>");
    }
    else{
        document.write("Ваше число НЕ делится на 2 или 5 или 3 или 6 или 9 без остатка");
        document.write("<br>");
    }
}
var a = Number(prompt("Введите число"), "");
FOO(a);

