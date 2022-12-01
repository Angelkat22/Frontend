// // 1)Создайте параграф и одну кнопку. Добавьте стили для этих элементов используя javascript.Сделайте так, чтобы при клике на кнопку исчезал параграф , а при повторном клике появлялся обратно. 

let par = document.createElement('p');  
par.innerText = 'Styling with JS';
par.style.fontSize = '25px';
par.style.fontWeight = 'bold';
par.style.color = 'green';
par.style.margin = '20px';
par.classList.add('show'); 


const btn = document.createElement('button');
btn.innerText = 'Click on me!';
btn.style.cssText ='background -color: lightgreen; padding: 30px; font - size: 20px; border-radius: 30px; margin: 20px;'

document.body.append(par, btn);

btn.onclick = () => {
        if ( par.classList.contains('show')){
            par.classList.replace('show', 'hide');
        }else {
            par.classList.replace("hide", "show");
        }
    }

// // 2)Создайте массив, содержащий названия цветов. На основе этого массива создайте список. При наведении на один из пунктов должен поменяться цвет фона всего документа на данный цвет. 

let colorArr = ['red','green','yellow', 'orange','blue', 'purple'];

let ul = document.createElement("ul"); 
ul.style.cssText = 'margin: 100px; font-size: 30px;'

for (let i = 0; i < colorArr.length; i++) {
    let li = document.createElement("li"); 
    li.innerText = colorArr[i];
    ul.appendChild(li);

    li.onmouseover = function () {  
        document.body.style.background = colorArr[i];
    }
}
document.body.appendChild(ul);

// // 3)Создайте массив с Вашими любимыми фильмами. Напишите цикл, который создает заголовки на основе этого массива. При клике на заголовок внизу появляется краткое описание данного фильма. 

let movies = [
        {title:"Вечеринка на вылет",
         info:"Талантливая архитектор Жанна получает выгодное предложение от династии Дагер. Глава семьи Сезар заработал состояние на разработках оригинальных игр для взрослой и детской аудиторий. Амбициозный миллионер хочет превратить родовое поместье в рай для геймеров, и Жанна должна воплотить идею в жизнь. Женщина начинает работать над проектом, но уже на начальном этапе все идет вразрез с составленным планом."
        },
    
        {title: "Дьявол в деталях",
         info: "Сюжет разворачивается в США начала 90-х. Джо Дикон, опытный помощник окружного прокурора из провинции едет в Лос-Анджелес по служебным делам. В этом городе он когда-то работал детективом, заслужил уважение и потерял здоровье. Но прошлое возвращается в жутковатом реальном виде: в городе происходят убийства, очень похожие на истории из прошлого Джо. Детективный фильм заслужил высокий зрительский рейтинг и был по достоинству оценен профессионалами из полиции."
        },
    
        {title: "Юный детектив",
         info: "Двадцать лет назад Эйб был местной достопримечательностью, он с легкостью распутывал мелкие преступления маленького городка. Вот только он вырос, а загадки так и остались маленькими. Теперь он проводит дни, распивая спиртное и вспоминая былое. Однажды на пороге его дома появляется клиентка и подкидывает ему «взрослую» загадку. Она просит Эйба найти убийцу своего парня. По силам ли она «юному» детективу?"
        },
        {title: "Переводчики",
         info: "Девять переводчиков из разных стран наняты для переложения на свои языки финальной части бестселлера таинственного Оскара Браха. За солидный гонорар лингвисты должны работать в бункере, изолированном от внешнего мира. Во избежание утечки данных, героев детектива лишают интернета и мобильной связи. Но страницы романа всё равно попадают в сеть. За неразглашение оставшейся части шантажист требует сумму, способную разорить издательство. Нужно срочно вычислить, кто из переводчиков сливает информацию."
        }
    ];

    for (let movie of movies) { 

        let heading = document.createElement('h2');
        heading.innerText = movie.title;
        heading.style.cssText = 'margin: 30px; color: purple'

        let p = document.createElement("p"); 
        p.innerText = movie.info;
        p.style.cssText = 'margin: 30px; font-size: 15px'
        p.classList.add("hide");
    
        document.body.append(heading, p);

        heading.onclick =() =>{
            if (p.classList.contains('show')){
                p.classList.replace('show', 'hide');
            }else {
                p.classList.replace('hide', 'show');
            }
        };
    }

// //4)Клавиатура на Вашем экране! Создайте кнопки(button) со всеми английскими буквами. Застилизуйте их так, чтобы на экране была копия клавиатуры (только английские буквы, цвета и размеры кнопок выбирайте на свой вкус).


let keyBoard = 
["q","w","e","r", "t", "y", "u", "i", "o", "p", ",", "a", "s", "d", "f", "g", "h", "j", "k", "l", ';', "'", "\\", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/"];


for (let i =0; i<keyBoard.length; i++){
    let btn = document.createElement('button');
    btn.innerText = keyBoard[i];
    btn.style.cssText = 'margin: 10px; background-color: lightgray; font-size:20px; padding: 10px 10px; width: 50px; height: 50px; border-radius:10px';

    document.body.appendChild(btn);
}

//5)Доработайте предыдущий скрипт так, чтобы при нажатии на кнопку ,сверху видеть буквы, на которые нажимает пользователь(имитация клавиатуры). Подсказка: можете использовать параграф.

let keyboard = 
["q","w","e","r", "t", "y", "u", "i", "o", "p", ",", "a", "s", "d", "f", "g", "h", "j", "k", "l", ';', "'", "\\", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "_"];

for (let i = 0; i < keyboard.length; i++){ 
    let btn = document.createElement("button"); 
    btn.innerText = keyboard[i];
    btn.style.cssText = 'margin: 10px; background-color: lightgray; font-size:20px; padding: 10px 10px; width: 50px; height: 50px; border-radius:10px';
    
    document.body.appendChild(btn);
    
    
    btn.onclick = () => { 
        p.innerText = p.textContent + btn.textContent;
        }

}
let p = document.createElement('p');
p.style.cssText = 'margin: 100px';

document.body.appendChild(p); 

