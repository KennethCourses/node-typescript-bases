import { getPokemonById } from './js-foundation/08-fetch-http-client';

getPokemonById(1)
    .then(pokemon => console.log({ pokemon }));