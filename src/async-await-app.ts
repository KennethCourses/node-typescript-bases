import { getPokemonById } from './js-foundation/07-async-await';

const pokemonName = getPokemonById(10)

pokemonName
    .then(name => console.log({ name }))
    .catch(err => console.log('ID invalido'));