import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import { GraphQLClient } from "graphql-request";

const query = /* GraphQL */ `
  query pokemons($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) {
      count
      next
      previous
      nextOffset
      prevOffset
      params
      results {
        url
        name
        image
        id
      }
      status
      message
    }
  }
`;

export async function getPokemonsFetchQuery(variables) {
  const graphQLClient = new GraphQLClient(
    "https://graphql-pokeapi.vercel.app/api/graphql"
  );

  const data = await graphQLClient.request(query, variables);
  return data;
}
