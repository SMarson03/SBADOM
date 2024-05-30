const bodyEl = document.querySelector('body');
bodyEl.style.backgroundColor = "var(--main-bg)";
bodyEl.style.backgroundImage = "url('https://images.pexels.com/photos/816608/pexels-photo-816608.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"

const mainEl =document.querySelector('main')
const h1 = document.createElement('h1')
h1.innerHTML = "FUTURE FORECAST";
mainEl.appendChild(h1);
h1.style.position = 'absolute'
h1.style.top = '0'


const imagEl = document.createElement('img')
imagEl.setAttribute("src" , 'https://i.pinimg.com/736x/41/d8/37/41d8375f3237702fed8b274ae68306ab.jpg');
mainEl.appendChild(imagEl)
imagEl.style.height = '400px'

