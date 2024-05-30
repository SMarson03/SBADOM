const bodyEl = document.querySelector('body');
bodyEl.style.backgroundColor = "var(--main-bg)";
bodyEl.style.backgroundImage = "url('https://images.pexels.com/photos/816608/pexels-photo-816608.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"

const mainEl =document.querySelector('main')
const h1 = document.createElement('h1')
h1.innerHTML = "FUTURE FORECAST";
mainEl.appendChild(h1);
h1.style.position = 'absolute'
h1.style.top = '0'

const cards = [
    {name:"The Sun", URL:"https://biddytarot.com/wp-content/uploads/2018/02/19-sun-345x480.png"},
    {name:"Ace of Cups", URL:"https://biddytarot.com/wp-content/uploads/2013/12/cups-01-ace-345x480.png"},
    {name:"The Fool", URL:"https://biddytarot.com/wp-content/uploads/2018/02/0-fool-345x480.png"},
    {name:"The Lovers", URL:"https://biddytarot.com/wp-content/uploads/2018/02/06-lovers-345x480.png"},
    {name:"The World", URL:"https://biddytarot.com/wp-content/uploads/2018/02/21-world-345x480.png"},
    {name:"The Tower", URL:"https://biddytarot.com/wp-content/uploads/2018/02/16-tower-345x480.png"},
    {name:"Death", URL:"https://biddytarot.com/wp-content/uploads/2018/02/13-death-345x480.png"},
    {name:"The SunD", URL:"https://biddytarot.com/wp-content/uploads/2018/02/19-sun.png"},
    {name:"Ace of CupsD", URL:"https://biddytarot.com/wp-content/uploads/2013/12/cups-01-ace.png"},
    {name:"The FoolD", URL:"https://biddytarot.com/wp-content/uploads/2018/02/0-fool.png"},
    {name:"The LoversD", URL:"https://biddytarot.com/wp-content/uploads/2018/02/06-lovers.png"},
    {name:"The WorldD", URL:"https://biddytarot.com/wp-content/uploads/2018/02/21-world.png"},
    {name:"The TowerD", URL:"https://biddytarot.com/wp-content/uploads/2018/02/16-tower.png"},
    {name:"DeathD", URL:"https://biddytarot.com/wp-content/uploads/2018/02/13-death.png"},
]

const imagEl = document.createElement('img')
imagEl.setAttribute("src" , 'https://i.pinimg.com/736x/41/d8/37/41d8375f3237702fed8b274ae68306ab.jpg');
mainEl.appendChild(imagEl)
imagEl.style.height = '400px'

function createImg(url){
   const img = document.createElement("img")
   img.src = url
   return img
    

}

imagEl.addEventListener("click", (event)=>{
    const backCard = shuffle(cards)[cards.length-1]
    const {name, URL} = backCard
    const img = createImg(URL)
    mainEl.appendChild(img)
    img.style.height = '400px'
    console.log(img)
}
)



function shuffle(cards){
    for(let i = 0; i < cards.length; i++){
        const j = Math.floor(Math.random()*(i +1));
        [cards[i], cards[j]] = [cards[j], cards[i]];    
    }
    return cards
}

//console.log(shuffle(cards[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]))