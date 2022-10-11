let containerEl =document.getElementById('container');
let cords__length =12;
let cards = [];

let previousShowCard = undefined;
let backImg = [
  "./images/bg2.png"
]

let images = [
  "./images/n7.png",
  "./images/a.png",
  "./images/j.png",
  "./images/jok.png",
  "./images/k.png",
  "./images/q.png"
]
images.push(...images);

for(let i = 0; i <images.length; i++) {
  const idR1 = Math.floor(Math.random() * images.length);
  const idR2 = Math.floor(Math.random() * images.length);
  const temp = images[idR1];
  images[idR1] = images[idR2];
  images[idR2] = temp;
}
for(let i = 0; i < cords__length; i++) {
  let cardEl = document.createElement("div");
  cardEl.classList.add("card");
  cardEl.innerHTML = ` 
   <div class="front"> 
     <img  src="${images[i]}" / >
   </div>
   <div class="back"> 
     <img  src="${backImg[0]}" / >
   </div>
  `
  cardEl.addEventListener("click", ()=> {
    if(!cardEl.classList.contains("show")) {
      cardEl.classList.add("show")
    }
    if(!previousShowCard) {
      previousShowCard = cardEl;
    }else {
      const imgOne = previousShowCard.querySelector('img').getAttribute("src");
      const imgTwo = cardEl.querySelector('img').getAttribute("src")
      if(imgOne !== imgTwo) {
        const temp = previousShowCard;
        setTimeout(() => {
          temp.classList.remove("show");
          cardEl.classList.remove("show");
        },  1000);
      }
      
      previousShowCard = undefined;
    }
  })
 
  cards.push(cardEl);
  containerEl.appendChild(cardEl);
}
