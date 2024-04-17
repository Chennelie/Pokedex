//Iniialization
var pokemonId = 1; //Bulbasaur
var pokemon = getAndShowPokemon(pokemonId);

//Find the previous Pokemon
function previousPokemon() {
    if (pokemonId == 1) {
        pokemonId = 151;
    } else {
        pokemonId--;
    }
    getAndShowPokemon(pokemonId);
}

//Find the next Pokemon
function nextPokemon() {
    if (pokemonId == 151) {
        pokemonId = 1;
    } else {
        pokemonId++;
    }
    getAndShowPokemon(pokemonId);
}

//Get the pokemon by its id and show it
function getAndShowPokemon(pokemonId) {
    var pokemon;
    var xmlHttpRequest = new XMLHttpRequest();
    xmlHttpRequest.open("GET", "https://pokeapi.co/api/v2/pokemon/" + pokemonId, false);
    xmlHttpRequest.onreadystatechange = function() {
        if (xmlHttpRequest.readyState === 4) {
            if (xmlHttpRequest.status === 200 || xmlHttpRequest.status == 0) {
                xmlHttpRequest.responseText;
                pokemon = JSON.parse(xmlHttpRequest.responseText);
            }
        }
    }
    xmlHttpRequest.send(null);
    
    //Show pokemon information on the left side
    var pokemonImage = document.getElementById("screen-left-image");
    pokemonImage.setAttribute("src", pokemon.sprites.other.dream_world.front_default);
    
    var pokemonHeight = document.getElementById("pokemon-height");
    pokemonHeight.innerHTML = pokemon.height;

    var pokemonWeight = document.getElementById("pokemon-weight");
    pokemonWeight.innerHTML = pokemon.weight;

    //Show pokemon information on the right side
    var pokemonTitle = document.getElementById("pokemon-title");
    pokemonTitle.innerHTML = pokemon.name + " (" + pokemon.id + ")";

    var pokemonHp = document.getElementById("pokemon-hp");
    pokemonHp.innerHTML = pokemon.stats[0].base_stat;

    var pokemonAttack = document.getElementById("pokemon-attack");
    pokemonAttack.innerHTML = pokemon.stats[1].base_stat;

    var pokemonDefense = document.getElementById("pokemon-defense");
    pokemonDefense.innerHTML = pokemon.stats[2].base_stat;

    var pokemonSpeed = document.getElementById("pokemon-speed");
    pokemonSpeed.innerHTML = pokemon.stats[4].base_stat;

    var pokemonType1 = document.getElementById("pokemon-type-1");
    var pokemonType2 = document.getElementById("pokemon-type-2");
    pokemonType1.innerHTML = pokemon.types[0].type.name;  
    if(pokemon.types.length > 1) {
        pokemonType2.innerHTML = pokemon.types[1].type.name;
    } else {
        pokemonType2.innerHTML = "";
    }
         
}
