const bodyEl = document.querySelector('body');

bodyEl.style.backgroundImage = "url('https://images.pexels.com/photos/816608/pexels-photo-816608.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"

const mainEl =document.querySelector('main')
const h1 = document.createElement('h1')
h1.innerHTML = "FUTURE FORECAST";
mainEl.appendChild(h1);
h1.style.position = 'absolute'
h1.style.top = '0'

const cards = [
    {name:"The Sun", URL:"https://biddytarot.com/wp-content/uploads/2018/02/19-sun-345x480.png", text: "The Sun represents success, radiance and abundance. The Sun gives you strength and tells you that no matter where you go or what you do, your positive and radiant energy will follow you and bring you happiness and joy. People are drawn to you because you can always see the bright side and bring such warmth into other people’s lives."},
    {name:"Ace of Cups", URL:"https://biddytarot.com/wp-content/uploads/2013/12/cups-01-ace-345x480.png", text:""},
    {name:"The Fool", URL:"https://biddytarot.com/wp-content/uploads/2018/02/0-fool-345x480.png", text:""},
    {name:"The Lovers", URL:"https://biddytarot.com/wp-content/uploads/2018/02/06-lovers-345x480.png", text:""},
    {name:"The World", URL:"https://biddytarot.com/wp-content/uploads/2018/02/21-world-345x480.png", text:""},
    {name:"The Tower", URL:"https://biddytarot.com/wp-content/uploads/2018/02/16-tower-345x480.png", text:"Just when you think you’re safe and comfortable, a Tower moment hits and throws you for a loop. A lightning bolt of clarity and insight cuts through the lies and illusions you have been telling yourself, and now the truth comes to light. "},
    {name:"Death", URL:"https://biddytarot.com/wp-content/uploads/2018/02/13-death-345x480.png", text:"After a period of pause and reflection with The Hanged Man, the Death card symbolizes the end of a major phase or aspect of your life that you realize is no longer serving you, opening up the possibility of something far more valuable and essential. "},
]

function shuffle(cards){
    for(let i = 0; i < cards.length; i++){
        const j = Math.floor(Math.random()*(i +1));
        [cards[i], cards[j]] = [cards[j], cards[i]];    
    }
    return cards
}
//Created image element and set attribute to face down card as main focus
const imagEl = document.createElement('img')
imagEl.setAttribute("src" , 'https://i.pinimg.com/736x/41/d8/37/41d8375f3237702fed8b274ae68306ab.jpg');
mainEl.appendChild(imagEl)
imagEl.style.height = '400px'

const pEl = document.createElement ('p')
mainEl.appendChild(pEl)
function createText(text){
    const p = document.createElement("p")
    p.src = text
    return text
}
 
//Pulled the url from the array and created an image element
//allowing each url pulled to show a face value on the site
function createImg(url){
   const img = document.createElement("img")
   img.src = url
   return img
}

//Adding event listener to face down card that every time its clicked
//you "fortune" is read by a new card. My main issue allowing and append once
imagEl.addEventListener("click", (event)=>{
    mainEl.replaceChildren(mainEl.fourthChild)
    const backCard = shuffle(cards)[cards.length-1]
    const {name, URL, text} = backCard
    const img = createImg(URL)
    const p = createText(text)
    mainEl.appendChild(img, p)
    img.style.height = '400px'
        console.log(img, text)
    
  
}) 

//bring it back to neutral

// function validate(){
// let num = document.myform.num.value;
// if(isNaN(num)){
//     document.getElementById("numloc")
// }

// }
