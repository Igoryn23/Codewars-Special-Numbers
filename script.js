// Balanced Number (7kyu )
const i1 = document.querySelector('.i-1');
const out1 = document.querySelector('.out-1');

function balancedNum() {
    let num = +i1.value;
    console.log(num);
    let digit = [];
    let sumLeft = 0;
    let sumRight = 0;
    while (num) {
        digit.push(num % 10);
        num = Math.floor(num / 10);
    }
    // digit получился реверсом в отличии от исходного num !!!
    // right
    for (let i = 0; i < (digit.length / 2) - 1; i++) {
        sumRight += digit[i];
    }
    digit.reverse();
    // left
    for (let i = 0; i < (digit.length / 2) - 1; i++) {
        sumLeft += digit[i];
    }
    console.log(digit);
    console.log(sumLeft);
    console.log(sumRight);

    if (sumLeft === sumRight) {
        console.log("Balanced");
        out1.innerHTML = 'Balanced';
    } else {
        console.log("Not Balanced");
        out1.innerHTML = "Not Balanced";
    }
}
document.querySelector('.b-1').onclick = balancedNum;

// Strong Number (Special Numbers Series #2)  ( 7kyu ) 
const i2 = document.querySelector('.i-2');
const out2 = document.querySelector('.out-2');

function strongNumber() {
    let n = +i2.value;
    const numConst = n; //  создаём копию исходного числа n так как само n поменяется в процессе !!!
    let num = n;
    let sumN = 1;
    let digit = []; // элементы разложения числа
    let digitF = []; // для элементов после обработки факториала

    // разложение числа на цифры
    console.log(n);
    while (n) {
        digit.push(n % 10);
        n = Math.floor(n / 10);
    }
    //console.log(digit);
    console.log(n);
    digit.reverse();
    console.log(digit);
    // для каждого элемента вычисляем факториал 
    for (let i = 0; i < digit.length; i++) {
        for (let k = 1; k <= digit[i]; k++) {
            sumN *= k;
        }
        digitF.push(sumN);
        sumN = 1; // обнуляем переменную в которую суммировали
    }
    console.log(digitF);
    // суммирум элементы digitF 
    let check = digitF.reduce(function(a, b) {
        return a + b;
    })
    console.log(check);
    // проверка STRONG NUMBER
    if (numConst === check) {
        out2.innerHTML = "STRONG!!!!";
    } else {
        out2.innerHTML = "Not Strong !!";
    }
}
document.querySelector('.b-2').onclick = strongNumber;

// Disarium Number (Special Numbers Series #3)
const i3 = document.querySelector('.i-3');
const out3 = document.querySelector('.out-3');

function disariumNumber() {
    let n = +i3.value; // перевод в число
    let sum = 0;
    let str = n + '';
    for (let i = 0; i < str.length; i++) {
        sum += str[i] ** (i + 1);
    }
    (sum === n) ? out3.innerHTML = 'Disarium !!': out3.innerHTML = 'Not !!';
}
document.querySelector('.b-3').onclick = disariumNumber;