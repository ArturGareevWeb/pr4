'use strict';

// задание 1

let a = +prompt('Введите число a')
let b = +prompt('Введите число b')
for(let i =a; i<=b; i++){
    if(i %2 !== 0) continue;
    alert(i);
} 


// задание 2

let i = 0;
while(i<3){
    alert(`number ${i}`); i++
}


// Задание 3

let num = +prompt('Введите число больше 10');
for(; num<10;) {
    let num = +prompt('Введите число еще раз'); if (num>10) break
}

// Задание 4

function min(a1, b1){
    if (a1<b1)
        alert(a1)
    else alert(b1)
} min(531,32)


// Задание 5

let ask = (question,yes, no)=>{
     if (confirm(question)) yes()
    else no()
};

  ask(
    "Вы согласны?",
    function() { alert("Вы согласились."); },
    function() { alert("Вы отменили выполнение."); }
  );
  

// Задание 6
checkAge (+prompt('Сколько вам лет?'))

function checkAge(age) {
    (age >= 18) ?  true :  confirm('Родители разрешили?')
}