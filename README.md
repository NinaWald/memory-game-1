# memory-game-1
This javascript game is one of two games that I made when exercising javascript. 
This version is with only one set of images to the memory game, it dynamically creates two copies of each card from the cardArray when populating the game board.
It creates two instances of each card by looping through cardArray twice and assigning a unique data-id to each card to distinguish between the pairs.

function createBoard() {
    shuffleArray(cardArray);

    for (let i = 0; i < cardArray.length * 2; i++) {
        const card = document.createElement('img');
        const randomCard = cardArray[i % cardArray.length]; // Get a card from the cardArray
        card.setAttribute('src', 'images/blank.png');
        card.setAttribute('data-id', i);
        card.setAttribute('data-name', randomCard.name); // Set the card's data-name attribute
        card.addEventListener('click', flipCard);
        grid.appendChild(card);
    }
}


The cardArray is shuffled using the shuffleArray function to randomize the order of the cards.
A loop is used to create and populate the game board with card images. It iterates cardArray.length * 2 times to create two copies of each card.
For each card, the code sets the src attribute to 'images/blank.png' (initially showing the back of the card), sets data-id with a unique identifier, and sets data-name with the name of a card from the cardArray.
An event listener is added to each card to handle the click event by calling the flipCard function when a player clicks on a card.


Card Data (Array): The cardArray contains an array of objects, each representing a card in the game. Each object has a name (e.g., 'pokemon1') and an img property pointing to the image file associated with that card.

HTML Elements:

grid: This represents the grid (game board) where the cards will be displayed.
resultDisplay: This is used to display the player's score.
Functions:

shuffleArray(array): This function takes an array and shuffles its elements randomly. It's used to randomize the order of cards in the game.
createBoard(): This function initializes the game board by creating and populating the grid with card images. It also calls shuffleArray to randomize the card order.
checkForMatch(): This function checks if two cards chosen by the player match by comparing their data-name attributes. If they match, the cards stay face up; otherwise, they are flipped back to the blank side. It also updates the score and checks if the player has won the game.
flipCard(): This function is called when a player clicks on a card. It flips the card to reveal its image and checks for a match when two cards are selected.
Event Listeners:

The code listens for the DOMContentLoaded event, which ensures that the script runs after the HTML has been loaded.
Each card image element (created dynamically) has an event listener for the click event that calls the flipCard function.
Start Button:

There's a start button (startButton) that, when clicked, resets the game by clearing variables and the grid and then calling createBoard to start a new game.
Game Logic:

When the player clicks on two cards, the flipCard function is called, and it checks for a match after a short delay.
The player's score is displayed in the resultDisplay.
When all pairs of cards are matched, the player is notified that they've won the game.
The code is designed for a simple memory card game where the player flips cards to find matching pairs. It randomizes the card order at the start of each game and keeps track of the player's score.
