import { useState, createContext } from "react";

export const MyPokemonContext = createContext();

export default function MyPokemonContextContainer(props) {
  let [myPokemons, setMyPokemons] = useState(null);

  const handleMyPokemons = (myPokemonList) => {
    setMyPokemons(myPokemonList);
  };

  return (
    <MyPokemonContext.Provider value={{ myPokemons, handleMyPokemons }}>
      {props.children}
    </MyPokemonContext.Provider>
  );
}
