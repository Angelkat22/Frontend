
let form = document.querySelector('#form');
const titleInput = document.querySelector('#title');
const priceInput = document.querySelector('#price');

const sectionProducts = document.querySelector('#products');

let products = [];

titleInput.setAttribute('required', 'true');
priceInput.setAttribute('required', 'true');

form.onsubmit = (event) => {
  event.preventDefault();
  
  products.push(
    {title:titleInput.value,
    price:priceInput.value,
  });

  newProducts();
  titleInput.value = '';
  priceInput.value = '';

  console.log('products');
};

function createNode(title,price){
  let div = document.createElement('div');
  div.classList.add('products');

  let titleP = document.createElement("p");
  let priceP = document.createElement("p");

  titleP.innerText= title;
  priceP.innerText= price;

  div.append(titleP,priceP);

  div.ondblclick = () => {
      alert(title);
  };

  sectionProducts.append(div);
}

function newProducts() {
    sectionProducts.innerHTML = "";
    for (let i = 0; i < products.length; i++) {
      createNode(products[i].title, products[i].price);
    }
}

// К форме добавьте кнопку. При клике на кнопку с помощью alert выводите итоговую сумму всех товаров


const btnTotalPrice = document.querySelector('.total');

btnTotalPrice.onclick = () => {
  let TotalPrice = 0;
  for(let i =0; i<products.length; i++ ){
    TotalPrice += +products[i].price;
  }
  alert ('Total price is ' + TotalPrice);
}

//Создайте input для ввода пароля. Рядом с input-ом добавьте так же кнопку. При первом клике на кнопку текст должен скрыться, а при повторном нажатии должен появиться обратно.

let passwordDiv = document.createElement('div');
passwordDiv.classList.add('password');

passwordDiv.style.cssText = 'margin: 50px auto; border-radius: 15px; padding: 60px; max-width: 700px; width: 100%; background-color: lightseagreen';

let passwordInput = document.createElement('input');
passwordInput.setAttribute("type", "text");
passwordInput.setAttribute("placeholder", 'Введите пароль');
passwordInput.style.cssText = 'width: 100%; height: 35px; margin-bottom: 10px; outline: none';

let passwordBtn = document.createElement('button');
passwordBtn.classList.add('pass');
passwordBtn.innerText = "Скрыть";

passwordBtn.style.cssText = 'margin-top: 20px; border: none; width: 100%; background-color: lightseagreen; height: 35px; color: white; cursor: pointer; font-weight: bold';


passwordDiv.append(passwordInput, passwordBtn);
document.body.appendChild(passwordDiv);


passwordBtn.onclick = () => {
  passwordInput.type = passwordInput.type === 'password' ? 'text' : 'password'
}


