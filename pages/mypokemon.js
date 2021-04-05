import { useEffect, useState } from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import MainLayout from "../src/layouts/mainLayout";
import CardPokemon from "../src/components/cardPokemon";
import { getMyPokemons, releasePokemon } from "../src/helpers/pokemonHelper";

export default function Home() {
  let [myPokemon, setMyPokemon] = useState();
  useEffect(() => {
    setMyPokemon(getMyPokemons());
  }, []);

  return (
    <>
      {!myPokemon ? (
        <h2>Loading...</h2>
      ) : (
        <MainLayout>
          <div
            css={css`
              display: flex;
              flex-direction: row;
              justify-content: center;
              align-items: center;
              flex-wrap: wrap;
            `}
          >
            {myPokemon.map((pokemon, i) => {
              return (
                <CardPokemon
                  key={i}
                  name={pokemon.name}
                  image={pokemon.image}
                  withButton
                  onClickButton={() => releasePokemon(pokemon.nickname)}
                />
              );
            })}
          </div>
        </MainLayout>
      )}
    </>
  );
}
