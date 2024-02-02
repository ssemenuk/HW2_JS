///1
var age = parseInt(prompt("Введіть ваш вік:"));

if (age < 0) {
    alert("Введіть коректний вік");
} else {
    var category = "";

    if (age <= 12) {
        category = "Дитина";
    } else if (age <= 18) {
        category = "Підліток";
    } else if (age <= 60) {
        category = "Дорослий";
    } else {
        category = "Пенсіонер";
    }

    alert("Ви належите до категорії: " + category);
}

// 2
var number = parseInt(prompt("Введіть число від 0 до 9:"));
var symbol;

switch (number) {
    case 1:
        symbol = "!";
        break;
    case 2:
        symbol = "@";
        break;
    case 3:
        symbol = "#";
        break;
    case 4:
        symbol = "$";
        break;
    case 5:
        symbol = "%";
        break;
    case 6:
        symbol = "^";
        break;
    case 7:
        symbol = "*";
        break;
    case 8:
        symbol = "(";
        break;
    case 9:
        symbol = ")";
        break;
    default:
        alert("Некоректне число");
}

if (symbol !== undefined) {
    alert("Символ для числа " + number + ": " + symbol);
}

// 3
var threeDigitNumber = prompt("Введіть тризначне число:");

if (threeDigitNumber.length === 3 && /^\d+$/.test(threeDigitNumber)) {
    var areDigitsEqual = threeDigitNumber[0] === threeDigitNumber[1] && threeDigitNumber[1] === threeDigitNumber[2];

    if (areDigitsEqual) {
        alert("У числі однакові цифри");
    } else {
        alert("У числі різні цифри");
    }
} else {
    alert("Введено некоректне тризначне число");
}

// 4
var year = parseInt(prompt("Введіть рік:"));

var isLeapYear = (year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0);

if (isLeapYear) {
    alert("Рік є високосним");
} else {
    alert("Рік не є високосним");
}

// 5
var fiveDigitNumber = prompt("Введіть п'ятирозрядне число:");

if (fiveDigitNumber.length === 5) {
    var reversedNumber = fiveDigitNumber.split('').reverse().join('');

    if (fiveDigitNumber === reversedNumber) {
        alert("Це паліндром");
    } else {
        alert("Не паліндром");
    }
} else {
    alert("Не введено п'ятирозрядне число");
}
// 6
var amountInUSD = parseFloat(prompt("Введіть суму в USD:"));
var targetCurrency = prompt("Введіть валюту для конвертації (EUR, UAN або AZN):");
var targetExchangeRate;

if (targetCurrency === "EUR") {
    targetExchangeRate = 0.85;
} else if (targetCurrency === "UAN") {
    targetExchangeRate = 27.5;
} else if (targetCurrency === "AZN") {
    targetExchangeRate = 1.7;
} else {
    alert("Некоректна валюта");
}

if (targetExchangeRate !== undefined) {
    var convertedAmount = amountInUSD * targetExchangeRate;
    alert("Сума в " + targetCurrency + ": " + convertedAmount.toFixed(2));
}
// 7
var purchaseAmount = parseFloat(prompt("Введіть суму покупки:"));
var discountRate;

function calculateDiscount(amount) {
    if (amount >= 200 && amount < 300) {
        return 0.03;


    } else if (amount >= 300 && amount < 500) {
        return 0.05;

    } else if (amount >= 500) {
        return 0.07;


    } else {
        return 0;
    }
}

discountRate = calculateDiscount(purchaseAmount);
var discountedAmount = purchaseAmount - (purchaseAmount * discountRate);
alert("Сума до сплати зі знижкою: " + discountedAmount.toFixed(2));


// 8
var newCircleRadius = parseFloat(prompt("Введіть радіус кола:"));
var newSquareSideLength = parseFloat(prompt("Введіть довжину сторони квадрата:"));
var circleDiameter = newCircleRadius * 2;

function canCircleFitInSquare(radius, sideLength) {
    return radius <= sideLength / 2;
}

if (canCircleFitInSquare(newCircleRadius, newSquareSideLength)) {
    alert("Коло може поміститися у квадрат");
} else {
    alert("Коло не може поміститися у квадрат");
}
// 9
var totalScore = 0;

var question1 = prompt("Яка столиця Франції?\n1. Берлін\n2. Лондон\n3. Париж");
if (question1.trim() === "3") {
    totalScore += 2;
}

var question2 = prompt("Який найвищий горизонтальний об'єкт на Землі?\n1. Ейфелева вежа\n2. Бурдж Халіфа\n3. Статуя Свободи");
if (question2.trim() === "2") {
    totalScore += 2;
}

var question3 = prompt("Яке тваринне царство налічує найбільше видів?\n1. Земноводні\n2. Риби\n3. Комахи");
if (question3.trim() === "3") {
    totalScore += 2;
}

alert("Кількість набраних балів: " + totalScore);