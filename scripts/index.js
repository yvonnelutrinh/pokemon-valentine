import { generator } from "./jokes.js";

document.querySelectorAll(".button-container").forEach((button) => {
  button.addEventListener("click", (e) => {
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

  while (!imageUrl) {
    const randPokemon = names[Math.floor(Math.random() * names.length)];
    console.log("Random Fighting Pokemon:", randPokemon);

    chosenPokemon = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${randPokemon}`
    );
    imageUrl =
      chosenPokemon.data.sprites.other["official-artwork"].front_default;
    console.log("Image URL:", imageUrl);
    document.querySelector(".new-message").textContent = `New message from ${randPokemon.charAt(0).toUpperCase() + randPokemon.slice(1)}!`;

  }

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

  while (!imageUrl) {
    const randPokemon = names[Math.floor(Math.random() * names.length)];
    console.log("Random Fairy Pokemon:", randPokemon);

    chosenPokemon = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${randPokemon}`
    );
    imageUrl =
      chosenPokemon.data.sprites.other["official-artwork"].front_default;
    console.log("Image URL", imageUrl);
    document.querySelector(".new-message").textContent = `New message from ${randPokemon.charAt(0).toUpperCase() + randPokemon.slice(1)}!`;

  }

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
