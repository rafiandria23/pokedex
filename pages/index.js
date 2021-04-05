import { getPokemonsFetchQuery } from "../src/graphql/getPokemons";
import { useEffect, useState } from "react";
/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";
import MainLayout from "../src/layouts/mainLayout";
import CardPokemon from "../src/components/cardPokemon";
import Link from "next/link";
import { route } from "../src/helpers/route";

export default function Home({ pokemons }) {
  return (
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
        {pokemons.results.map((pokemon, i) => {
          return (
            <CardPokemon key={i} name={pokemon.name} image={pokemon.image} />
          );
        })}
      </div>
    </MainLayout>
  );
}

export const getServerSideProps = async (ctx) => {
  // Fetch data from external API
  const pokemonListResponse = await getPokemonsFetchQuery({
    limit: 10,
  });
  console.log(pokemonListResponse);
  // Pass data to the page via props
  return { props: { pokemons: pokemonListResponse.pokemons } };
};
