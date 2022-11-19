// 1.Создать пронумерованные списки с товарами (на основе массива с объектами);

const arr = [ 
    { 
    title: "BMW", 
    price: "40000",
    count: "15" 
}, 
    { 
    title: "Toyota", 
    price: "20000", 
    count: "13" 
},
    { 
    title: "Ford", 
    price: "30000",
    count: "20" 
    }, 
    {
    title: "Chevrolet",
    price: "60000", 
    count: "9"
}, 
    { 
    title: "Volkswagen", 
    price: "30000", 
    count: "13" 
}
]
    
let ol = document.createElement("ol");

for (let i = 0; i < arr.length; i++){
    let li = document.createElement("li");
    li.innerText = `${arr[i].title}`;
    ol.append(li);
}
document.body.append(ol);


// 2.	Написать скрипт, который выводит списки с товарами в интерфейс (на основе массива с объектами с прошлой задачи), а внизу выводится итоговая сумма товаров и их количество.

let all_price = 0;
    for(let i = 0; i<arr.length; i++){
    all_price += +arr[i].price; 
}
document.body.append("Общая стоимость товаров: " + all_price);


let all_count = 0;
    for(let i = 0; i < arr.length; i++){
        all_count += +arr[i].count; 
    }
document.body.append("  Общее количество товаров: " + all_count);

// 3. Напишите скрипт, который выводит в интерфейс следующую таблицу:

let table = document.createElement("table");
let tr_1 = document.createElement("tr");
let tr_2 = document.createElement("tr");
let tr_3 = document.createElement("tr");
let tr_4 = document.createElement("tr");
let tr_5 = document.createElement("tr");


let thNumber = document.createElement("th");
let thName = document.createElement("th");
let thPosition = document.createElement("th");
let thSalary = document.createElement("th");

let td_1 = document.createElement("td");
let td_2 = document.createElement("td");
let td_3 = document.createElement("td");
let td_4 = document.createElement("td");
let td_5 = document.createElement("td");
let td_6 = document.createElement("td");
let td_7 = document.createElement("td");
let td_8 = document.createElement("td");
let td_9 = document.createElement("td");
let td_10 = document.createElement("td");
let td_11 = document.createElement("td");
let td_12 = document.createElement("td");
let td_13 = document.createElement("td");
let td_14 = document.createElement("td");
let td_15 = document.createElement("td");
let td_16 = document.createElement("td");

thNumber.innerText = "No.";
thName.innerText = "Full name";
thPosition.innerText = "Position";
thSalary.innerText = "Salary";

td_1.innerText = "1";
td_2.innerText = "Bill Gates";
td_3.innerText = "Founder Microsoft";
td_4.innerText = "$1000";

td_5.innerText = "2";
td_6.innerText = "Steve Jobs";
td_7.innerText = "Founder Apple";
td_8.innerText = "$1200";

td_9.innerText = "3";
td_10.innerText = "Larry Page";
td_11.innerText = "Founder Google";
td_12.innerText = "$1100";

td_13.innerText = "4";
td_14.innerText = "Mark Zuckeberg";
td_15.innerText = "Founder Facebook";
td_16.innerText = "$1300";

tr_1.append(thNumber, thName, thPosition, thSalary);
tr_2.append(td_1, td_2, td_3, td_4);
tr_3.append(td_5, td_6, td_7, td_8);
tr_4.append(td_9, td_10, td_11, td_12);
tr_5.append(td_13, td_14, td_15, td_16);

table.append(tr_1, tr_2, tr_3, tr_4, tr_5);
document.body.append(table);


