import { getPokemonById } from './js-foundation/06-promises';

getPokemonById(11)
    .then((pokemonName) => { console.log({ pokemonName }) })
    .catch((error) => { console.log('Ese Id es invalido') });