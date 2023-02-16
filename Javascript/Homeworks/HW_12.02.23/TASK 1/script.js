// Задана ссылка на api:
// let url = "https://dummyjson.com/products"
// Напишите fetch-запрос, который получит данные от сервера в виде массива и для каждого полученного элемента формирует div элемент с описанием товара.

// В div необходимо указать следующую информацию: 
// 1.	Изображение товара
// 2.	Имя продукта
// 3.	Стоимость продукта
// 4.	Рейтинг продукта (*)


const products_container = document.querySelector('.products_container')

const render = products => {
        const all_cards = products.map(({ images, title, price, rating }) => {
        const products_card = document.createElement('div')

        const product_image = document.createElement('img')
        product_image.setAttribute('src',images[0])
        product_image.setAttribute('alt', `${title}`)

        const product_title = document.createElement('p')
        product_title.innerText = `Title: ${title}`

        const product_price = document.createElement('p')
        product_price.innerText = `Price: ${price}$`

        const product_rating = document.createElement('p')
        //product_rating.innerText = `Rating: ${rating}` // здесь впоследствии буду ссылаться на иконки звездочек

        products_card.classList.add ('product_card')
        product_image.classList.add('image')

        products_card.append(product_image,product_title,product_price, product_rating)
        return products_card        
    })
    products_container.append (...all_cards)
}

const getAllProducts = () => {
    fetch ('https://dummyjson.com/products')
    .then (res => res.json())
    .then (json => render(json.products)) 
}

getAllProducts() 

// Как изобразить рейтинг в виде иконок и првязать к функции - не хватило времени додумать...