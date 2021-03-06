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

// Jumping Number (Special Numbers Series #4)
const i4 = document.querySelector('.i-4');
const out4 = document.querySelector('.out-4');

function jumpingNumber() {
    let n = +i4.value;
    let arr = [];
    while (n) {
        arr.push(n % 10);
        n = Math.floor(n / 10);
    }
    if (arr.length === 1) {
        console.log('Jumping!!');
    }
    let count = 1;
    for (let i = 0; i < arr.length - 1; i++) {
        if (Math.abs(arr[i] - arr[i + 1]) === 1) {
            count++;
        } else {
            console.log(false);
        }

    }
    console.log(count);
    (count === arr.length) ? out4.innerHTML = true: out4.innerHTML = false;
}
document.querySelector('.b-4').onclick = jumpingNumber;

// Special Number (Special Numbers Series #5)
const i5 = document.querySelector('.i-5');
const out5 = document.querySelector('.out-5');

function specialNumber() {
    let n = +i5.value;
    n = n.toString().split('');
    let arr = n.map(function(elem) {
        return +elem;
    })
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 5) {
            out5.innerHTML = 'NOT!!';
            return "NOT!!";
        }
    }
    out5.innerHTML = 'Special!!';
    return "Special!!"
}
document.querySelector('.b-5').onclick = specialNumber;

// Automorphic Number (Special Numbers Series #6)
const i6 = document.querySelector('.i-6');
const out6 = document.querySelector('.out-6');

function automorphic() {
    let n = +i6.value;
    let n2 = n * n;
    // переводим числа в массив и реверсуем
    let str = n.toString().split('').reverse();
    let str2 = n2.toString().split('').reverse();
    // алгоритм проверки 
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== str2[i]) {
            out6.innerHTML = 'Not!!';
            return "Not!!";
        }
    }
    out6.innerHTML = 'Automorphic';
    return "Automorphic";
}

document.querySelector('.b-6').onclick = automorphic;


//  Extra Perfect Numbers (Special Numbers Series #7)
const i7 = document.querySelector('.i-7');
const out7 = document.querySelector('.out-7');

function extraPerfect() {
    let num = +i7.value;
    let arr = [];
    for (let i = 1; i <= num; i++) {
        if (i % 2) {
            arr.push(i);
        }
    }
    out7.innerHTML = arr;
    return arr;
}

document.querySelector('.b-7').onclick = extraPerfect;

// Tidy Number (Special Numbers Series #9)
const i9 = document.querySelector('.i-9');
const out9 = document.querySelector('.out-9');

function tidyNumber() {
    let n = +i9.value;
    n = n.toString().split('');
    for (let i = 0; i < n.length; i++) {
        if (n[i] > n[i + 1]) {
            out9.innerHTML = 'False';
            return false;
        }
    }
    out9.innerHTML = 'True';
    return true;

}

document.querySelector('.b-9').onclick = tidyNumber;