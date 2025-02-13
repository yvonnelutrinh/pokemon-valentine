import { generator, fighterJokes, fairyJokes } from "./jokes.js";

document.querySelectorAll(".button-container").forEach((button) => {
  button.addEventListener("click", (e) => {
    const generatedContent = document.querySelector(".generated-content");
    generatedContent.style.display = "flex";

    if (e.target.closest(".button-container__fighting")) {
      //alert("fighting");
      fightingData();
    } else if (e.target.closest(".button-container__fairy")) {
      //alert("fairy");
      fairyData();
    }
  });
});

async function fightingData() {
  const url = "https://pokeapi.co/api/v2/type/2";
  const response = await axios.get(url);

  const names = response.data.pokemon.map((p) => p.pokemon.name);
  //console.log(names);

  let imageUrl;
  let chosenPokemon;
  let fighterJoke;

  while (!imageUrl || !fighterJoke) {
    const randPokemon = names[Math.floor(Math.random() * names.length)];
    // console.log("Random Fighting Pokemon:", randPokemon);

    chosenPokemon = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${randPokemon}`
    );
    imageUrl =
      chosenPokemon.data.sprites.other["official-artwork"].front_default;
    fighterJoke = fighterJokes[randPokemon];
    // console.log("Image URL:", imageUrl);
    // console.log(fighterJoke);
  }
  // console.log(chosenPokemon.data.name);
  document.querySelector(".new-message").textContent = `New message from ${
    "prettyName" in fighterJokes[chosenPokemon.data.name]
      ? fighterJokes[chosenPokemon.data.name].prettyName
      : chosenPokemon.data.name.charAt(0).toUpperCase() +
        chosenPokemon.data.name.slice(1)
  }!`;

  let element = document.querySelector(".letter__pokemon");
  let img = element.querySelector("img");

  if (img) {
    //if the image already exists, replace with the new one

    img.src = imageUrl;
  } else {
    img = document.createElement("img"); //otherwise, create a new image element
    img.style.width = "100%";
    img.src = imageUrl;
  }

  element.append(img);
  generator.pullJoke("fighter", chosenPokemon.data.name);
  //   console.log(chosenPokemon.data);
}

async function fairyData() {
  const url = "https://pokeapi.co/api/v2/type/18";
  const response = await axios.get(url);

  const names = response.data.pokemon.map((p) => p.pokemon.name);
  // console.log(names);

  let imageUrl;
  let chosenPokemon;
  let fairyJoke;

  while (!imageUrl || !fairyJoke) {
    const randPokemon = names[Math.floor(Math.random() * names.length)];
    // console.log("Random Fairy Pokemon:", randPokemon);

    chosenPokemon = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${randPokemon}`
    );
    imageUrl =
      chosenPokemon.data.sprites.other["official-artwork"].front_default;
    fairyJoke = fairyJokes[randPokemon];
    console.log("Image URL:", imageUrl);
    console.log(fairyJoke);
  }
  console.log(chosenPokemon.data.name);
  document.querySelector(".new-message").textContent = `New message from ${
    "prettyName" in fairyJokes[chosenPokemon.data.name]
      ? fairyJokes[chosenPokemon.data.name].prettyName
      : chosenPokemon.data.name.charAt(0).toUpperCase() +
        chosenPokemon.data.name.slice(1)
  }!`;

  let element = document.querySelector(".letter__pokemon");
  let img = element.querySelector("img");

  if (img) {
    img.src = imageUrl;
  } else {
    img = document.createElement("img");
    img.style.width = "100%";
    img.src = imageUrl;
  }

  element.append(img);

  generator.pullJoke("fairy", chosenPokemon.data.name);
  //   console.log(chosenPokemon.data);
}
