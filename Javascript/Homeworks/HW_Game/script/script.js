

/*Улучшить игру <<Камень-ножницы-бумага>>:
1) измените ввод пользователя (сделайте с помощью input, клик на определенные картинки или другим способом на Ваш выбор).
2) измените вывод победителя (вместо alert используйте картинку, GIF, анимацию или другой способ вывода.
3) улучшите стиль всего приложения.*/

// Я столкнклась с 2 проблемами:
//- у меня не появляется кнопка играть еще
// - картинка о выигрыше или проигрыше или ничьей появляется лишь один раз, т.е. если она уже выскосила ранее, то уже не повторяется, а выходит только текст - Вы выиграли, ничья и т.д.




const startBtn = document.querySelector('#start');
let divGame = document.querySelector('.game_2');
let divResult = document.querySelector('.result');
let gameBody = document.querySelector('.game-body');
let moreGame = document.querySelector('.OneMoreBtn');
let input = document.querySelectorAll('input');
let compMove;
let userMove;
let winner = document.querySelector('.winner');
let looser = document.querySelector('.looser');
let all_winners = document.querySelector('.all_winners');


startBtn.onclick = () => {
  let game = document.querySelector('.game_2');

  gameBody.style.display = 'none';
  divGame.style.display = 'block';
  clear();
};

moreGame.onclick = () => {
  winner.style.display = 'none';
  looser.style.display = 'none';
  all_winners.style.display = 'none';
  moreGame.style.display ='none';
  p.style.display = 'none';
  clear();
}

function clear() {
  for (let i = 0; i < input.length; i++) {
    input[i].addEventListener ('click', 
    
    function foo() {
    userMove = parseInt(input[i].name);
    compMove = Math.floor(Math.random() * 3);
    
    if (compMove === 0 && userMove === 1) {
      winner.style.display = 'block';
      let p = document.createElement('p');
      p.innerText = 'Вы выиграли с помощью бумаги';
      p.style.textAlign = 'center';
      p.style.fontSize = '50px';
      p.style.color = 'red';
      p.style.width = '700px';
      p.style.margin = '30px auto';

      divGame.appendChild(p);
        
    } else if (compMove === 0 && userMove === 2) {
      looser.style.display = 'block';
      let p = document.createElement('p');
      p.innerText = 'Комп выиграл Вас с помощью камня';
      p.style.textAlign = 'center';
      p.style.fontSize = '50px';
      p.style.width = '700px';
      p.style.color = 'green';
      p.style.margin = '30px auto';

      divGame.appendChild(p);

    } else if (compMove === 1 && userMove === 0) {
      looser.style.display = 'block';

      let p = document.createElement('p');
      p.innerText = 'Комп выиграл с помощью бумаги';
      p.style.textAlign = 'center';
      p.style.fontSize = '50px';
      p.style.width = '700px';
      p.style.margin = '30px auto';
      p.style.color = 'green';

      divGame.appendChild(p);


    } else if (compMove === 1 && userMove === 2) {
      winner.style.display = 'block';

      let p = document.createElement('p');
      p.innerText = 'Вы выиграли с помощью ножниц';
      p.style.textAlign = 'center';
      p.style.fontSize = '50px';
      p.style.width = '700px';
      p.style.margin = '30px auto';
      p.style.color = 'red';

      divGame.appendChild(p);


    } else if (compMove === 2 && userMove === 0) {
      winner.style.display = 'block';
      
      let p = document.createElement('p');
      p.innerText = 'Вы выиграли с помощью камня';
      p.style.textAlign = 'center';
      p.style.fontSize = '50px';
      p.style.width = '700px';
      p.style.margin = '30px auto';
      p.style.color = 'red';

      divGame.appendChild(p);
    } else if (compMove === 2 && userMove === 1) {
      looser.style.display = 'block';
      let p = document.createElement('p');
      p.innerText = 'Комп выиграл с помощью ножниц';
      p.style.textAlign = 'center';
      p.style.fontSize = '50px';
      p.style.width = '700px';
      p.style.margin = '30px auto';
      p.style.color = 'green';

      divGame.appendChild(p);

    } else if (compMove === userMove){
      all_winners.style.display = 'block';
      let p = document.createElement('p');
      p.innerText = 'У вас ничья';
      p.style.textAlign = 'center';
      p.style.fontSize = '50px';
      p.style.color = 'blue';
      p.style.width = '500px';
      p.style.margin = '30px auto';

      divGame.appendChild(p);
        }
      
        moreGame.style.display = 'block';
  
      for (let i = 0; i < input.length; i++) {
        input[i].removeEventListener('click', foo);
      }
    })
  }
}
