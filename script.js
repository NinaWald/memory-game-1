document.addEventListener('DOMContentLoaded', () => {
const cardArray = [
    {
        name: 'pokemon1',
        img: 'images/pokemon1.png'
    },
    {
        name: 'pokemon2',
        img: 'images/pokemon2.png'
    },
    {
        name: 'pokemon3',
        img: 'images/pokemon3.png'
    },
    {
        name: 'pokemon4',
        img: 'images/pokemon4.png'
    },
    {
        name: 'pokemon5',
        img: 'images/pokemon5.png'
    },
    {
        name: 'pokemon6',
        img: 'images/pokemon6.png'
    },
    {
        name: 'pokemon7',
        img: 'images/pokemon7.png'
    },
    {
        name: 'pokemon8',
        img: 'images/pokemon8.png'
    },
    {
        name: 'pokemon9',
        img: 'images/pokemon9.png'
    },
    
]


const grid = document.querySelector('#grid')
const resultDisplay = document.querySelector('#result')
let cardsChosen = []
let cardsChosenIds = []
const cardsWon = []


function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function createBoard() {
    shuffleArray(cardArray);

    for (let i = 0; i < cardArray.length * 2; i++) {
        const card = document.createElement('img');
        const randomCard = cardArray[i % cardArray.length];
        card.setAttribute('src', 'images/blank.png');
        card.setAttribute('data-id', i);
        card.setAttribute('data-name', randomCard.name);
        card.addEventListener('click', flipCard);
        grid.appendChild(card);
    }
}



function checkForMatch() {
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenIds[0]
    const optionTwoId = cardsChosenIds[1]
    console.log('check for match!')
    if (optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute('src', 'images/white.png')
        cards[optionTwoId].setAttribute('src', 'images/white.png')
      alert('You have clicked the same image')
}

    if (cardsChosen[0] == cardsChosen[1]) {
        alert('You found a match! You receive 1 point!')
        cards[optionOneId].setAttribute('src', 'images/white.png')
        cards[optionTwoId].setAttribute('src', 'images/white.png')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
    } else {
        cards[optionOneId].setAttribute('src', 'images/blank.png')
        cards[optionTwoId].setAttribute('src', 'images/blank.png')
        alert('Sorry try again')
    }

    
    cardsChosen = []
    cardsChosenIds = []
    resultDisplay.textContent = cardsWon.length
    if  (cardsWon.length === cardArray.length) {
        resultDisplay.textContent = 'Congrats you found ALL'
        alert('Congrats you found ALL')
    }
}

function flipCard() {
    let cardId = this.getAttribute('data-id');
    cardsChosen.push(this.getAttribute('data-name'));
    cardsChosenIds.push(cardId);
    this.setAttribute('src', cardArray[cardId % cardArray.length].img);
    if (cardsChosen.length === 2) {
        setTimeout(checkForMatch, 500);
    }
}
const startButton = document.querySelector('#startButton');
startButton.addEventListener('click', startGame);

function startGame() {
    // Reset necessary variables and elements here
    cardsChosen = [];
    cardsChosenIds = [];
    cardsWon.length = 0; // Clear the cardsWon array
    resultDisplay.textContent = '0'; // Reset the score display

    // Remove all cards from the grid
    const cards = document.querySelectorAll('img');
    cards.forEach(card => card.remove());

    // Create a new shuffled board
    createBoard();
}


// call the function:
createBoard()

})
