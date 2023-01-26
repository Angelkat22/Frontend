//ЗАДАЧА 1

// Напишите функцию checkDate() которая в консоль отобразит количество дней до конца текущего месяца. 
// Примечание: инициализация дат должна быть внутри функции

//Решение:

function checkDate() {
    let today = new Date()
    let lastDayOfMonth = new Date (today.getFullYear(), today.getMonth() + 1, 0)
    let daysTillEnd = lastDayOfMonth.getDate ()- today.getDate()
    console.log(`До конца текущего месяца осталось ${daysTillEnd} дней`)
}
checkDate()


//ЗАДАЧА 2

// Создайте функцию isItFridayToday(), которая выводит сообщение согласно условию:
// Если текущая дата определит пятницу, функция должна в консоль отобразить ответ “Сегодня пятница”!
// Если пятница была вчера - “Пятница была вчера”
// Если пятница будет завтра - “Завтра пятница!”
// Иначе необходимо вывести “Пятница будет через n дней”, где n - это количество дней до пятницы.

// Предусмотрите вывод 4 пункта (дня, дней)

//Решение:

function isItFridayToday(){
    let today = new Date().getDay();
    let daysTillFriday = 5 - today;
        if (today == 5) {
            console.log(`Сегодня пятница!`)
        } else if (today == 4){
            console.log(`Завтра пятница!`)
        } else if (today == 6){
            console.log(`Пятница была вчера!`)
        }  else {
            if (daysTillFriday ==2 && daysTillFriday ==3 && daysTillFriday ==4){
                console.log(`Пятница будет через ${daysTillFriday} дня`)
            } else 
            console.log(`Пятница будет через ${daysTillFriday} дней`)
            }
    }

isItFridayToday()

//ЗАДАЧА 3
// Задан массив prices, передающий элементы строкового типа. Напишите функцию getInfo(prices), которая получает массив и возвращает количество элементов, которые начинаются на “Цена” и количество элементов, которые заканчиваются на “$” в виде массива по примеру:

// // Пример:
let prices = [ 
'Цена товара - 1200$', 
'Стоимость - 500$', 
'Цена не определена', '9999',
'Ценовая категория - больше 300$',
'Цена за услугу 500 EUR',
]

// console.log(getInfo(prices))

// Результат: [3,3]

//Решение:

function getInfo(prices) {
    let startsWithP = 0;
    let endsWithD = 0;

    prices.forEach(prices => {
    if (prices.startsWith("Цена")) {
        startsWithP++;
    }
    if (prices.endsWith("$")) {
        endsWithD++;
    }
    })

    return [startsWithP, endsWithD];
}

console.log(getInfo(prices));

//ЗАДАЧА 4

// Задан массив arrays. 
let arrays = [ 
'89840959944 exampleonemain@mail.ru', 
'+79840959933 forreason@yandex.net', 
'somemail@mail.ru', 
'89840959900 example@gmil.ru', 
'+79840959911', 
'grandthere@mail.ru',
'jetpackfor@gmail.ru',
'89840959922 some@yandex.com',
] 

// Сформируйте два новых массива phones и emails, которые будут содержать данные по примеру: 
//['89840959944','+79840959933','89840959900','+79840959911','89840959922'] ['exampleonemain@mail.ru','forreason@yandex.net','somemail@mail.ru','example@gmil.ru','grandthere@mail.ru','jetpackfor@gmail.ru','some@yandex.com']

//Решение:

let phones = []
let emails = []
let regPhones = (/.*\d{11}/)
let regEmails =(/\w{2,}@\w{2,}[.]\w{2,}/)

for (let elem of arrays) {
    if (elem.match(regPhones)){
        phones.push(elem.match(regPhones)[0])
    } if (elem.match(regEmails)){
        emails.push(elem.match(regEmails)[0])
    }
}

console.log (phones)
console.log (emails)

//ЗАДАЧА 5

// Задан массив cards, передающий элементы строкового типа. Необходимо зашифровать номера карт по следующему правилу: заменить всю строку на 5 символов “*”, оставив первые 4 и последние 4 цифры.

//Пример:
	let cards = [ 
'4000 0012 0056 9499', 
'4000 0013 5456 7379', 
'4000 0014 1456 9869', 
'4000 0015 3466 7859', 
'4000 0016 3556 6899', 
'4000 0017 4456 4699'
]
	

// Результат: [
// '4000*****9499',
// '4000*****7379',
// '4000*****9869',
// '4000*****7859',
// '4000*****6899',
// '4000*****4699'
// ]

//Решение:

let newCards = cards.map(cards => {
    let firstPart = cards.substring(0, 4)
    let lastPart = cards.substring(cards.length - 4)
    return firstPart + '*****' + lastPart
})
console.log(newCards)


