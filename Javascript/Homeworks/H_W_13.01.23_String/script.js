// Задан массив elems, передающий элемент HTML разметки. 
// Реализуйте очистку данных по примеру ниже:
let elems = [
    '<div><p class="text">Home</p></div>', 
    '<div><p class="text">About</p></div>', 
    '<div><p class="text">FAQ</p></div>', 
    '<div><p class="text">Contacts</p></div>' 
    ] 
// Результат: ['Home','About','FAQ','Contacts']

    for (let elem in elems){
        elems[elem] = elems[elem].slice(elems[elem].indexOf('>',elems[elem].indexOf('>')+1)+1, elems[elem].indexOf('</'))
}
    
console.log(elems)
    

// Напишите функцию initCap(array), которая получает массив с элементами строкового значения и возвращает элементы с заглавной первой буквой по примеру: 
let words = ['стакан','молоко','табуретка','вода'] 

// // Результат: ['Cтакан','Молоко','Табуретка','Вода']


    function initCap(array){
        let newArray = []
        for (let elem of array){
            //newArray.push(elem.slice(0,1).toUpperCase()+ elem.slice(1)) - РЕШЕНИЕ 1
            newArray.push(elem.replace(elem[0], elem[0].toUpperCase()))  // - РЕШЕНИЕ 2
        }
        return newArray
}

console.log(initCap(words)); 


// Задан массив names. 
// Сформируйте новый массив full_names, элементы которого будут содежрать вложенный массив с именем и фамилией. Если фамилии не окажется - второй элемент должен хранить undefined 

let names = [ 
'Steven King', 
'Jonh Snow', 
'Oliver', 
'Neena Stich',
'Grant Laster', 
'Persius Master', 
'Lest' 
] 

// // Результат: [ 
// // ['Steven','King'], 
// // ['Jonh','Snow'], 
// // ['Oliver', undefined], 
// // ['Neena','Stich'], 
// // ['Grant','Laster'], 
// // ['Persius','Master'],
// // ['Lest', undefined] ]
// // ]

//РЕШЕНИЕ 1 

const full_names_1 = names.map((el) => el.includes(' ') ? el.split(' ') : [el,undefined]);
    console.log(full_names_1);


// РЕШЕНИЕ 2

// const full_names_2 = []
//  for (let elem of names){
//       let elem_array = elem.split(' ')
//          if(elem_array.length == 2 ){
//             full_names_2.push(elem_array)
//           } else if (elem_array.length == 1){
//                      elem_array.push(undefined)
//                      full_names_2.push(elem_array)
//           }
//    }
//  console.log(full_names_2);
//


// // РЕШЕНИЕ 3

//const full_names_3 = names.map(elem => {
    // if (elem.includes(' ')) {
    //        return elem.split(' ');
    //      } else {
    //        return [elem, undefined];
    //      }
    //   }); 
    
    // console.log(full_names_3);