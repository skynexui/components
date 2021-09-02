import React from 'react';
import { SkynexComponents } from '../../libs/SkynexBridge/types';

function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export default function MainScreenWrapper({ Box, Text, Image }: SkynexComponents) {
  return function MainScreen(): JSX.Element {
    const [pokemons, setPokemons] = React.useState([]);
    React.useEffect(() => {
      fetch('https://metarepo.vercel.app/api/graphql', {
        method: 'POST',
        body: JSON.stringify({
          query: /* GraphQL */`
            query {
              pokemons {
                id
                name
                image
              }
            }
          `,
        }),
      })
        .then((res) => res.json())
        .then((gqlResponse) => {
          setPokemons(gqlResponse.data.pokemons);
        })
    }, []);
    return (
      <Box as={{ web: 'main', mobile: 'ScrollView' }} flex="1" background="neutral050" paddingTop="x20" paddingX="x4">
        <Text variant="heading_1" textColor="primary800" marginBottom="x4" alignSelf="center" bold>Welcome to my Pokedex!</Text>
        <Text variant="heading_3" textColor="primary600" marginBottom="x8" alignSelf="center" bold>Created by DevSoutinho</Text>
        <Box flexWrap="wrap" flexDirection="row" justifyContent="center">
          {pokemons.map((pokemon) => (
            <Box key={pokemon.id} flex={{ xs: '1 1 x96', md: "1 1 x64"}} maxWidth={{ xs: 'x96', md: "x64"}} flexDirection="column" border="x1 solid primary200" background="white" margin="x4" padding="x4" borderRadius="lg">
              <Text variant="body_1" textColor="neutral300" bold>#{pokemon.id} {capitalize(pokemon.name)}</Text>
              <Image src={pokemon.image} width="x20" height="x20" alignSelf="flex-end" />
            </Box>
          ))}
        </Box>
      </Box>
    );
  }
}
