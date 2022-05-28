/* let doccument = {
  Title: "",
  Body: "",
  Footer: "",
  Date: "",
  Addendum: {
    Theme: "",
    Body: "",
    Footer: "",
    Date: ""
  },
  print(){
    for(key in doccument)
        console.log(`Свойство ${key} значение ${doccument[key]} `);
  },
  fill(){
    this.Title = prompt("Введите Title","");
    this.Body = prompt("Введите Body","");
    this.Footer = prompt("Введите Footer","");
    this.Date = prompt("Введите Date","");
    this.Addendum.Theme = prompt("Введите в качестве дополнения Theme","");
    this.Addendum.Body = prompt("Введите в качестве дополнения Body","");
    this.Addendum.Footer = prompt("Введите в качестве дополнения Footer","");
    this.Addendum.Date = prompt("Введите в качестве дополнения Date","");
 }
}

doccument.fill();
doccument.print(); */
/* console.log(eval(prompt("Введите выражение которое желаете посчитать", "")));



let x = eval(prompt("Введите выражение которое желаете посчитать", ""));
alert(x);


 */

/* function calculate(a, b, operation) {
  if (Array.isArray(a) && Array.isArray(b)) {
    if (operation == `+`) {
      let newarr = [];
      for (let index = 0; index < a.length; index++) {
        alert(a[index] + b[index]);
        newarr[index] = a[index] + b[index];
      }
      return newarr;
    }
    if (operation == `-`) {
      let newarr = [];
      for (let index = 0; index < a.length; index++) {
        alert(a[index] * b[index]);
        newarr[index] = a[index] * b[index];
      }
      return newarr;
    }
    if (operation == `*`) {
      let newarr = [];
      for (let index = 0; index < a.length; index++) {
        alert(a[index] * b[index]);
        newarr[index] = a[index] * b[index];
      }
      return newarr;
    }
    if (operation == `/`) {
      let newarr = [];
      for (let index = 0; index < a.length; index++) {
        alert(a[index] / b[index]);
        newarr[index] = a[index] / b[index];
      }
      return newarr;
    }
  } else if (typeof a == "object" && typeof b == "object") {
    if (operation == `+`) {
      alert(a.a + b.b);
      return {
        result: a.a + b.b,
      };
    }
    if (operation == `-`) {
      alert(a.a - b.b);
      return {
        result: a.a - b.b,
      };
    }
    if (operation == `*`) {
      alert(a.a * b.b);
      return {
        result: a.a * b.b,
      };
    }
    if (operation == `/`) {
      alert(a.a / b.b);
      return {
        result: a.a / b.b,
      };
    }
  } else {
    if (operation == `+`) {
      alert(a + b);
    }
    if (operation == `-`) {
      alert(a - b);
    }
    if (operation == `*`) {
      alert(a * b);
    }
    if (operation == `/`) {
      alert(a / b);
    }
  }
} */

/* let x = +prompt("Введите первое число", "");
let y = +prompt("Введите второе число", "");
let oper = prompt("Введите операцию между ними", "");
 */
/* let a = [];
a[0] = +prompt("Введите первое число", "");
a[1] = 21;

let b = [];
b[0] = +prompt("Введите второе число", "");
b[1] = 7;
let oper = prompt("Введите операцию между ними", "");

let arr = calculate(a, b, oper);

console.log(arr[0], arr[1]); */

/* let first = { a: 3 };
let second = { b: 3 };
let oper = prompt("Введите операцию между ними", "");
let third = { c:calculate(first, second, oper)};
console.log(third.c);

 */

/* let MathFrameWork = {
  result: "",
  a: [],
  b: [],
  operation: "",

  calculate(a, b, operation) {
    if (Array.isArray(a) && Array.isArray(b)) {
      console.log("hel");
      if (operation == `+`) {
        let newarr = [];
        for (let index = 0; index < a.length; index++) {
          alert(a[index] + b[index]);
          newarr[index] = a[index] + b[index];
        }
        this.result = newarr;
        return newarr;
      }
      if (operation == `-`) {
        let newarr = [];
        for (let index = 0; index < a.length; index++) {
          alert(a[index] * b[index]);
          newarr[index] = a[index] * b[index];
        }
        this.result = newarr;
        return newarr;
      }
      if (operation == `*`) {
        let newarr = [];
        for (let index = 0; index < a.length; index++) {
          alert(a[index] * b[index]);
          newarr[index] = a[index] * b[index];
        }
        this.result = newarr;
        return newarr;
      }
      if (operation == `/`) {
        let newarr = [];
        for (let index = 0; index < a.length; index++) {
          alert(a[index] / b[index]);
          newarr[index] = a[index] / b[index];
        }
        this.result = newarr;
        return newarr;
      }
    } else if (typeof a == "object" && typeof b == "object") {
      if (operation == `+`) {
        alert(a.a + b.b);
        this.result = a.a + b.b;
        return {
          result: a.a + b.b,
        };
      }
      if (operation == `-`) {
        alert(a.a - b.b);
        this.result = a.a - b.b;
        return {
          result: a.a - b.b,
        };
      }
      if (operation == `*`) {
        alert(a.a * b.b);
        this.result = a.a * b.b;
        return {
          result: a.a * b.b,
        };
      }
      if (operation == `/`) {
        alert(a.a / b.b);
        this.result = a.a / b.b;
        return {
          result: a.a / b.b,
        };
      }
    } else {
      if (operation == `+`) {
        alert(a + b);
        this.result = a + b;
      }
      if (operation == `-`) {
        alert(a - b);
        this.result = a - b;
      }
      if (operation == `*`) {
        alert(a * b);
        this.result = a * b;
      }
      if (operation == `/`) {
        alert(a / b);
        this.result = a / b;
      }
    }
  },
};




MathFrameWork.a[0] = +prompt("Введите первое число массива", "");
MathFrameWork.a[1] = +prompt("Введите второе число массива", "");

alert(MathFrameWork.a);

MathFrameWork.b[0] = +prompt("Введите первое число массива", "");
MathFrameWork.b[1] = +prompt("Введите второе число массива", "");
MathFrameWork.operation = prompt("Введите операцию между ними", "");

let res = calculate(MathFrameWork.a,MathFrameWork.b,MathFrameWork.operation);

console.log(res); */

alert(
  "Привет пользователь, давай сыграем в игру! У тебя будет 1 попытка на провал. Старайся быть внимательным"
);

alert("Игра называется Journey ");

let age = +prompt(
  "Для того чтобы продолжить, ты должен сказать сколько тебе лет =) Прости, это просто проверка на возраст, ничего личного..",
  "10,11,12,13..20?"
);

if (age < 10) {
  alert(
    "Прости пожалуйста, но я боюсь, ты еще не знаешь ответов на вопросы.. Возвращайся когда станешь немного взрослее!"
  );
} else {
  alert(
    "Предположим, что мы захотели попутешевствовать в другую страну из города Харьков"
  );
  alert(
    "Хм.. кажется, я знаю в какую страну мы поедем в первую очередь"
  );

  let x = prompt(
    "И так, первый вопрос, страна которою я загадал очень развита в строении машин, таких как Audi, Mersedec, BMW. Попробуй угадать, что это за страна такая =)",
    ""
  );

  if (x == "Германия" || x == "германия") {
    alert("Ты угадал! Молодец");
    alert(
      "Кажется я устал от немецких сосисок, давай попробуем другую страну =)"
    );
    x = prompt("В этой стране очень любят круассаны и железную башню", "");
    if (x == "Франция" || x == "франция") {
      alert("Ты угадал! Молодец");
      alert(
        "В этой стране слишком романтично для меня, давай поедем в другую =)"
      );
      x = prompt(
        "В этой стране очень развита тема космоса и именно оттуда родом apple ",
        ""
      );
      if (x == "США" || x == "сша") {
        alert("Ты угадал! Молодец");
        x = prompt(
          "В этой стране очень стоит невероятно большая Ста́туя Христа́-Искупи́теля и люди там обожают карнавалы",
          ""
        );
        if (x == "Бразилия" || x == "бразилия") {
          alert("Ты угадал! Молодец");
          x = prompt(
            "В этой стране очень слишком много пауков, кенгуру, буйволов и в целом животных.. ",
            ""
          );
          if (x == "Австралия" || x == "австралия") {
            alert("Ты угадал! Молодец");

            x = prompt(
              "В этой стране еще до нашей эры построили величайшие сооружения - пирамиды. Там всё укутано песком и только..",
              ""
            );
            if (x == "Египет" || x == "египет") {
              alert("Ты угадал! Молодец");
              x = prompt(
                "Ты прошел огромные путь, я задам контрольный вопрос, на который ты точно знаешь ответ =). В этой стране живут самые лучшие люди мира, флаг этой страны символизирует голубое небо и пшеничные поля..",
                ""
              );
              if (x == "Украина" || x == "украина") {
                alert(
                  "Ты Огромный молодец! На всё ответил верно! Большое спасибо, что принял участие в этой викторине! =)"
                );
              } else {
                alert("К сожалению ты проиграл, попробуй заново!");
              }
            } else {
              alert("К сожалению ты проиграл, попробуй заново!");
            }
          } else {
            alert("К сожалению ты проиграл, попробуй заново!");
          }
        } else {
          alert("К сожалению ты проиграл, попробуй заново!");
        }
      } else {
        alert("К сожалению ты проиграл, попробуй заново!");
      }
    } else {
      alert("К сожалению ты проиграл, попробуй заново!");
    }
  } else {
    alert("К сожалению ты проиграл, попробуй заново!");
  }
}
