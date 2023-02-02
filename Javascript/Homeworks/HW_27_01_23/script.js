// Задан объект someObj с произвольными сво-ми. Напишите функцию getKeys(), которая в качестве аргумента получает объект и возвращает результат работы метода Object.keys() согласно примеру

// Примечание: Использовать класс Object нельзя.

//Пример:

// let someObj = {
// key1: 'value1',
// key2: 'value2',
// key3: 'value3',
// key4: 'value4',
// }


//A// //console.log(Object.keys (someObj))

//B// function getKeys(someObj) {
// //     return Object.keys (someObj)
// // }
// // console.log(getKeys(someObj))

//C// function getKeys(someObj) {               
//     let newArray = []                     
//         for (let key in someObj) {            
//             newArray.push(key)                
//         }
//         return  newArray; 
//     }                    
//     console.log(getKeys(someObj));

// Результат: ['key1','key2','key3','key4']


// Создайте функцию getAvg(), которая получает в качестве аргумента массив и возвращает среднее значение среди всех элементов. Примечание: гарантируется, что все элементы передают числовое значение
// Пример:


// let array = [1,2,3,4,5]
// function getAvg (array) {
//     return (array.reduce((el, accum) => accum += el)) / array.length;
// }
// console.log(getAvg(array));

// Результат: 3




// Создайте функцию countString(), которая получает массив в качестве аргумента.
// Реализуйте функционал, который посчитает и выведет в консоль количество элементов, чей тип равен ‘string’
// Пример:

let arr = [1,true,'3','value1',9,'key']
function countString (arr) {
    let result = arr.filter (el => typeof el == 'string').length
    console.log (result)
}

countString(arr)

// Результат: 3

// Задан объект someObj с произвольными сво-ми. Напишите функцию getEntries(), которая в качестве аргумента получает объект и возвращает результат работы метода Object.entries() согласно примеру:
// Пример:
// let someObj = {
// key1: 'value1',
// key2: 'value2',
// key3: 'value3',
// key4: 'value4',
// }

// //console.log(Object.entries(someObj))

// // function getEntries(someObj) {
// //     return Object.entries(someObj)
// // }

// // console.log(getEntries(someObj))

// function getEntries(someObj) {
//     let EntrArr = [];                        
//         for (let key in someObj) {               
//             EntrArr.push([key, someObj[key]]);    
//         }
//         return EntrArr;                            
//     }

//     console.log (getEntries(someObj))

// Результат: [['key1', 'value1'],['key2', 'value2'],['key3', 'value3'],['key4', 'value4']]


	


