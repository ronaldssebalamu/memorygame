const cardArray = [
  {
    name: "fries",
    img: "images/fries.png",
  },
  {
    name: "cheeseburger",
    img: "images/cheeseburger.png",
  },
  {
    name: "hotdog",
    img: "images/hotdog.png",
  },
  {
    name: "ice-cream",
    img: "images/ice-cream.png",
  },
  {
    name: "milkshake",
    img: "images/milkshake.png",
  },
  {
    name: "pizza",
    img: "images/pizza.png",
  },
  {
    name: "fries",
    img: "images/fries.png",
  },
  {
    name: "cheeseburger",
    img: "images/cheeseburger.png",
  },
  {
    name: "hotdog",
    img: "images/hotdog.png",
  },
  {
    name: "ice-cream",
    img: "images/ice-cream.png",
  },
  {
    name: "milkshake",
    img: "images/milkshake.png",
  },
  {
    name: "pizza",
    img: "images/pizza.png",
  },
];

//sort the two values

cardArray.sort(() => 0.5 - Math.random());

const gridDisplay = document.querySelector("#grid")
// console.log(gridDisplay); 

const resultDisplay = document.querySelector('#result')

let cardsChosen = []
let cardsChosenId = []
const cardsWon = []

function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
                const card = document.createElement('img')
                card.setAttribute('src','images/blank.png')
                card.setAttribute('data-id', i)
                card.addEventListener('click', flipCard)
                // console.log(card, i)
                gridDisplay.appendChild(card)
        }
}
 createBoard()

// check for matches

function checkForMatch() {
        const cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenIds[0]
        const optionTwoId = cardsChosenIds[1]

        // console.log(cards)
        //  console.log('check for match')

         if (optionOneId == optionTwoId) {
                cards[optionOneId].setAttribute('src', 'images/blank.png')
                cards[optionTwoId].setAttribute('src', 'images/blank.png')
                alert("You have clicked the same image!")
         }
         if (cardsChosen[0] === cardsChosen[1]) {
                alert(' You found a match')
                cards[optionOneId].setAttribute('src', 'images/white.png')
                cards[optionTwoId].setAttribute('src', 'images/white.png')
                cards[optionOneId].removeEventListener('click', flipCard)
                cards[optionTwoId].removeEventListener('click', flipCard)

                cardsWon.push(cardsChosen)

         } else {
                cards[optionOneId].setAttribute('src', 'images/white.png')
                cards[optionTwoId].setAttribute('src', 'images/white.png')
                alert('Sorry try again!')
         }

         cardsChosen = []
         cardsChosenId = []
         resultDisplay.textContent = cardsWon.length

         if (cardsWon.length === cardArray.length/2) {
                resultDisplay.innerHTML = 'Congratulations! you found them all!'
         }

}
function flipCard() {

        // console.log(cardArray)

        let cardId = this.getAttribute('data-id')// this. helps us to interact with each individual element we have clicked.
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)

        // console.log(cardsChosen)
        // console.log(cardsChosenId)
        // console.log('clicked', cardId)

        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length === 2) {
          setTimeout(checkForMatch, 500)
        }
}