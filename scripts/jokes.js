const fighterJokes = ["joke one", "joke two", "joke three", "joke four", "joke five"];
const fairyJokes = ["joke one", "joke two", "joke three", "joke four", "joke five"];
const cardMessageContainer = document.querySelector(".card__message");

class JokePrinter {
    // function to pull random string from joke arrays and modify html value 
    pullJoke(jokeType) {
        if (jokeType === "fighter") {
            const randomJokeIndex = Math.floor(Math.random() * fighterJokes.length); 
            cardMessageContainer.textContent = fighterJokes[randomJokeIndex];
            return fighterJokes[randomJokeIndex];
        }
        if (jokeType === "fairy") {
            const randomJokeIndex = Math.floor(Math.random() * fairyJokes.length);
            cardMessageContainer.textContent = fairyJokes[randomJokeIndex]; 
            return fairyJokes[randomJokeIndex];
        }
        else {
            console.log("Please pick a Pokemon type");
        }
    }
}

const generator = new JokePrinter();

export {generator}; // import to index.js

// add event listeners to buttons and call joke generator
// TODO: move lines below to index.js to clean up code readability

const fighterButton = document.querySelector("#fighterButton");
const fairyButton = document.querySelector("#fairyButton");

function clickFighterButton() {
    const newFighterJoke = generator.pullJoke("fighter");
    console.log("New fighter joke:", newFighterJoke);
}

function clickFairyButton() {
    const newFairyJoke = generator.pullJoke("fairy");
    console.log("New fairy joke:", newFairyJoke);
}

fighterButton.addEventListener("click", clickFighterButton);
fairyButton.addEventListener("click", clickFairyButton);




