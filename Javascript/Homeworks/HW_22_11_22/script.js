// Создайте массив с ссылками на картинки. На основе этого массива формируется множество маленьких картинок в верхней части интерфейса. При нажатии на одну из картинок забирается ссылка на эту картинку и в нижней части интерфейса отображается в большем размере.

const img = [
    "https://images.unsplash.com/photo-1489674267075-cee793167910?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fG5hdHVyZSUyMHdpbnRlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1457270508644-1e4905fabd7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bmF0dXJlJTIwd2ludGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1482597869166-609e91429f40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDd8fG5hdHVyZSUyMHdpbnRlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
];

let newDiv = document.createElement('div');
newDiv.classList.add('block');
let newDiv_up = document.createElement('div');
newDiv_up.classList.add('up');

let newDiv_down = document.createElement('div');
newDiv_down.classList.add('down');

for (let i = 0; i < img.length; i++) {

    let newImg_1 = document.createElement('img');
    newImg_1.setAttribute('src', img[i]);
    newImg_1.setAttribute('alt', 'nature');
    newImg_1.style.margin = '80px';
    newImg_1.style.width = '120px';
    newImg_1.style.height = '120px';

        newImg_1.onclick = () => {
            let newImg_2 = document.createElement('img');
            newImg_2.setAttribute('src', img[i]);
            newImg_2.setAttribute('alt', 'nature');
            newImg_2.style.margin = '80px';
            newImg_2.style.width = '200px';
            newImg_2.style.height = '200px';
            newDiv_down.append(newImg_2);
        };
        newDiv_up.append(newImg_1);
        newDiv.append(newDiv_up, newDiv_down);
}

document.body.append(newDiv);