document.querySelectorAll(".button-container button").forEach(button => {
    button.addEventListener("click", (e) => {

        if (e.target.closest(".button-fighting")) {
            //alert("fighting"); 
            fightingData(); 

        } else if (e.target.closest(".button-fairy")) {
            //alert("fairy"); 
            fairyData(); 
        }
    }); 
}); 

async function fightingData() {
    const url = "https://pokeapi.co/api/v2/type/2";
    const response = await axios.get(url); 
    
    const names = response.data.pokemon.map(p => p.pokemon.name); 
    //console.log(names); 

    const randPokemon = names[Math.floor(Math.random() * names.length)]; 
    console.log("Random Fighting Pokemon:", randPokemon);
    
    const chosenPokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${randPokemon}`); 
    const imageUrl = chosenPokemon.data.sprites.other["official-artwork"].front_default; 
    console.log('Image URL:', imageUrl); 

    let element = document.querySelector(".pokemon"); 

    let img = element.querySelector('img'); 

    if (img) { //if the image already exists, replace with the new one 

        img.src = imageUrl; 
        
    } else {

        img = document.createElement('img');  //otherwise, create a new image element 
        img.src = imageUrl; 
    }

    element.append(img); 
    
    
}; 

async function fairyData() {
    const url = "https://pokeapi.co/api/v2/type/18"; 
    const response = await axios.get(url); 

    const names = response.data.pokemon.map(p => p.pokemon.name); 
   // console.log(names); 

    const randPokemon = names[Math.floor(Math.random() * names.length)]; 
    console.log("Random Fairy Pokemon:", randPokemon); 

    const chosenPokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${randPokemon}`); 
    const imageUrl = chosenPokemon.data.sprites.other["official-artwork"].front_default; 
    console.log('Image URL', imageUrl);
    
    let element = document.querySelector(".pokemon"); 

    let img = element.querySelector('img'); 

    if (img) {

        img.src = imageUrl; 
        
    } else {

        img = document.createElement('img'); 
        img.src = imageUrl; 
    }

    element.append(img); 
   
}; 