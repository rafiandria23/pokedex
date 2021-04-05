import Swal from "sweetalert2";
import { useGetPokemon } from "../../src/graphql/getPokemon";
import MainLayout from "../../src/layouts/mainLayout";
/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";
import { useEffect, useState } from "react";
import Image from "next/image";
// import { catchPokemon } from "../../src/redux/actions/pokemonAction";
import { catchPokemon } from "../../src/helpers/pokemonHelper";
import {
  formatStringFromArray,
  formatStringFromString,
} from "../../src/helpers/formatter";

export default function PokemonDetails(props) {
  const [pokemonAbility, setPokemonAbility] = useState([]);
  const [activeTab, setActiveTab] = useState({
    about: true,
    stats: false,
    moves: false,
  });
  const pokemonDetails = useGetPokemon({
    variables: {
      name: props.name,
    },
  });
  useEffect(() => {
    pokemonDetails.data?.pokemon.abilities.forEach(({ ability }) => {
      setPokemonAbility((prevstate) => [...prevstate, ability.name]);
    });
  }, [pokemonDetails]);
  return (
    <>
      {pokemonDetails.loading ? (
        <p>Loading...</p>
      ) : (
        <MainLayout noHeader>
          <div
            css={css`
              font-family: "DM Sans", sans-serif;
            `}
          >
            <div
              css={css`
                padding: 0 30px;
                margin-bottom: 70px;
                margin-top: 20px;
              `}
            >
              <h1
                css={css`
                  font-weight: 700;
                  color: white;
                  font-size: 55px;
                  margin: 0 0 7px 0;
                `}
              >
                {formatStringFromString(props.name)}
              </h1>
              <div
                css={css`
                  width: 100%;
                  display: flex;
                `}
              >
                {pokemonDetails.data?.pokemon.types.map(({ type }, i) => {
                  return (
                    <div
                      key={i}
                      css={css`
                        background-color: #f7ba16;
                        padding: 7px 20px;
                        border-radius: 20px;
                        box-shadow: 0 1px 8px rgba(0, 0, 0, 0.14);
                        margin-right: 8px;
                      `}
                    >
                      <p
                        style={{
                          margin: 0,
                          fontFamily: "muli, sans-serif",
                          fontWeight: 700,
                        }}
                      >
                        {formatStringFromString(type.name)}
                      </p>
                    </div>
                  );
                })}
              </div>
              <button
                onClick={() =>
                  catchPokemon(
                    props.name,
                    pokemonDetails.data?.pokemon.sprites.front_default
                  )
                }
              >
                Catch
              </button>
            </div>
            <div
              css={css`
                background-color: white;
                height: 76vh;
                border-radius: 25px;
                display: flex;
                /* justify-content: center; */
                flex-direction: column;
                align-items: center;
              `}
            >
              <div>
                <img
                  css={css`
                    margin-top: -125px;
                    width: 200px;
                  `}
                  src={pokemonDetails.data?.pokemon.sprites.front_default}
                />
              </div>
              <div
                css={css`
                  display: flex;
                  justify-content: space-around;
                  width: 100%;
                `}
              >
                <p
                  css={css`
                    margin: 0;
                    border-bottom: 3px solid #d0d5e2;
                    padding-bottom: 18px;
                  `}
                  onClick={() =>
                    setActiveTab({ about: true, stats: false, moves: false })
                  }
                >
                  About
                </p>
                <p
                  css={css`
                    margin: 0;
                    border-bottom: 3px solid #d0d5e2;
                    padding-bottom: 18px;
                  `}
                  onClick={() =>
                    setActiveTab({ about: false, stats: true, moves: false })
                  }
                >
                  Base Stats
                </p>
                <p
                  css={css`
                    margin: 0;
                    border-bottom: 3px solid #d0d5e2;
                    padding-bottom: 18px;
                  `}
                  onClick={() =>
                    setActiveTab({ about: false, stats: false, moves: true })
                  }
                >
                  Moves
                </p>
              </div>
              {activeTab.about && (
                <div
                  css={css`
                    display: flex;
                    width: 100%;
                    justify-content: space-around;
                  `}
                >
                  <div>
                    <p>Height</p>
                    <p>Weight</p>
                    <p>Abilities</p>
                  </div>
                  <div>
                    <p>{pokemonDetails.data?.pokemon.height / 10} Meter</p>
                    <p>{pokemonDetails.data?.pokemon.weight / 10} Kilogram</p>
                    <p>{formatStringFromArray(pokemonAbility)}</p>
                  </div>
                </div>
              )}
              {activeTab.stats && (
                <div
                  css={css`
                    display: flex;
                    width: 100%;
                    justify-content: space-around;
                  `}
                >
                  <div>
                    {pokemonDetails.data?.pokemon.stats.map(({ stat }, i) => {
                      return <p key={i}>{formatStringFromString(stat.name)}</p>;
                    })}
                  </div>
                  <div>
                    {pokemonDetails.data?.pokemon.stats.map((stat, i) => {
                      return <p key={i}>{stat.base_stat}</p>;
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>
        </MainLayout>
      )}
    </>
  );
}

export const getServerSideProps = async (context) => {
  return {
    props: {
      name: context.query.name,
    },
  };
};
