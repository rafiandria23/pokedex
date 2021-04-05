import Swal from "sweetalert2";
import { formatStringFromString } from "./formatter";

function getProbabilityCatch() {
  let probability = Math.floor(Math.random() * 2);
  if (probability === 1) {
    return true;
  }
  return false;
}

export function getMyPokemons() {
  let myPokemons;
  if (!localStorage.myPokemons) {
    myPokemons = [];
  } else {
    myPokemons = JSON.parse(localStorage.myPokemons);
  }
  return myPokemons;
}

function addMyPokemon(pokemon) {
  localStorage.setItem("myPokemons", JSON.stringify(pokemon));
}

export function releasePokemon(pokemonNickname) {
  let updatedPokemons = getMyPokemons().filter((pokemon) => {
    console.log(pokemon.nickname, pokemonNickname);
    return pokemon.nickname !== pokemonNickname;
  });

  addMyPokemon(updatedPokemons);
}

export function catchPokemon(pokemonName, pokemonImage) {
  let myPokemons = getMyPokemons();

  if (getProbabilityCatch()) {
    return Swal.fire({
      title: `Yeay! you caught a ${formatStringFromString(pokemonName)}`,
      input: "text",
      inputLabel: `Enter nickname for ${formatStringFromString(pokemonName)}:`,
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "You need to write something!";
        } else {
          if (myPokemons.some((pokemon) => pokemon.nickname === value)) {
            return "Nickname already in use";
          } else {
            myPokemons.push({
              image: pokemonImage,
              name: pokemonName,
              nickname: value,
            });
            addMyPokemon(myPokemons);
          }
        }
      },
    });
  } else {
    return Swal.fire({
      title: `Oops, you failed to catch ${pokemonName}`,
      text: "Keep trying!:)",
      imageUrl: "https://media2.giphy.com/media/ic0iE4NVz0vGiNpxjd/source.gif",
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: "Custom image",
    });
  }
}
